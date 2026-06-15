import { applicationDefault, cert, initializeApp, getApps, getApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import fs from 'fs'
import path from 'path'

let app;

// Inisialisasi Firebase Admin
if (!getApps().length) {
  try {
    if (process.env.NODE_ENV === 'production' || process.env.FIREBASE_CONFIG) {
      // Di Firebase Functions (Produksi), gunakan kredensial bawaan server
      app = initializeApp({
        credential: applicationDefault()
      })
      console.log('Firebase Admin Initialized with Application Default Credentials')
    } else {
      // Di Lokal, baca file serviceAccountKey.json menggunakan fs 
      // agar file ini tidak ikut ter-bundle oleh Nitro ke produksi.
      const keyPath = path.resolve(process.cwd(), 'serviceAccountKey.json')
      if (fs.existsSync(keyPath)) {
        const serviceAccount = JSON.parse(fs.readFileSync(keyPath, 'utf8'))
        app = initializeApp({
          credential: cert(serviceAccount)
        })
        console.log('Firebase Admin Initialized with local serviceAccountKey.json')
      } else {
        console.warn('WARNING: serviceAccountKey.json tidak ditemukan!')
      }
    }
  } catch (error) {
    console.error('Error initializing Firebase Admin:', error)
  }
} else {
  app = getApp()
}

// Ekspor instance Auth dan Firestore milik Admin
export const adminAuth = app ? getAuth(app) : null
export const adminDb = app ? getFirestore(app) : null
