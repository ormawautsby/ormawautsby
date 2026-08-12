import { applicationDefault, cert, initializeApp, getApps, getApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import fs from 'fs'
import path from 'path'

// Inisialisasi Firebase Admin secara LAZY (hanya saat dibutuhkan)
// untuk menghindari timeout `Cannot determine backend specification` 
// saat proses cold start di Firebase Functions.
function getFirebaseAdminApp() {
  if (getApps().length > 0) {
    return getApp()
  }

  try {
    if (process.env.NODE_ENV === 'production' || process.env.FIREBASE_CONFIG) {
      // Di Firebase Functions (Produksi), gunakan kredensial bawaan server
      const app = initializeApp({
        credential: applicationDefault()
      })
      console.log('Firebase Admin Initialized with Application Default Credentials')
      return app
    } else {
      // Di Lokal, baca file serviceAccountKey.json menggunakan fs 
      const keyPath = path.resolve(process.cwd(), 'serviceAccountKey.json')
      if (fs.existsSync(keyPath)) {
        const serviceAccount = JSON.parse(fs.readFileSync(keyPath, 'utf8'))
        const app = initializeApp({
          credential: cert(serviceAccount)
        })
        console.log('Firebase Admin Initialized with local serviceAccountKey.json')
        return app
      } else {
        console.warn('WARNING: serviceAccountKey.json tidak ditemukan!')
        return initializeApp() // fallback (will likely fail later but avoids crash on boot)
      }
    }
  } catch (error) {
    console.error('Error initializing Firebase Admin:', error)
    return initializeApp()
  }
}

// Ekspor fungsi getter untuk Auth dan Firestore milik Admin
export const getAdminAuth = () => getAuth(getFirebaseAdminApp())
export const getAdminDb = () => getFirestore(getFirebaseAdminApp())
