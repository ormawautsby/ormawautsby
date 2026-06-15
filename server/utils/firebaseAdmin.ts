import { cert, initializeApp, getApps, getApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import serviceAccount from '../../serviceAccountKey.json'

let app;

// Inisialisasi Firebase Admin
if (!getApps().length) {
  try {
    app = initializeApp({
      credential: cert(serviceAccount)
    })
    console.log('Firebase Admin Initialized successfully')
  } catch (error) {
    console.error('Error initializing Firebase Admin:', error)
  }
} else {
  app = getApp()
}

// Ekspor instance Auth dan Firestore milik Admin
export const adminAuth = app ? getAuth(app) : null
export const adminDb = app ? getFirestore(app) : null
