import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password, name, role } = body
  const config = useRuntimeConfig()

  if (!email || !password || !role) {
    throw createError({ statusCode: 400, statusMessage: 'Email, Password, and Role are required' })
  }

  // Parse service account key
  let serviceAccount
  try {
    if (config.firebaseAdminKey) {
      serviceAccount = JSON.parse(config.firebaseAdminKey)
    }
  } catch (e) {
    throw createError({ statusCode: 500, statusMessage: 'Invalid Firebase Admin Key configuration' })
  }

  // Initialize Firebase Admin (only once)
  if (!getApps().length && serviceAccount) {
    initializeApp({
      credential: cert(serviceAccount)
    })
  }

  if (!getApps().length) {
    throw createError({ statusCode: 500, statusMessage: 'Firebase Admin not initialized. Check .env' })
  }

  try {
    // 1. Create user in Firebase Auth
    const userRecord = await getAuth().createUser({
      email,
      password,
      displayName: name,
    })

    // 2. Set Custom Claims for security rules (optional but recommended)
    await getAuth().setCustomUserClaims(userRecord.uid, { role })

    // 3. Save user role to Firestore
    const db = getFirestore()
    await db.collection('users').doc(userRecord.uid).set({
      email,
      nama: name || '',
      role,
      createdAt: new Date().toISOString()
    })

    return { success: true, uid: userRecord.uid, message: 'User created successfully' }
  } catch (error: any) {
    console.error('Error creating new user:', error)
    throw createError({ statusCode: 500, statusMessage: error.message || 'Failed to create user' })
  }
})
