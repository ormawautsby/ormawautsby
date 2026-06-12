import { initializeApp, getApps } from 'firebase/app'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
  }

  // Initialize Firebase only once
  let app
  if (!getApps().length && firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig)
  } else if (getApps().length) {
    app = getApps()[0]
  }

  if (!app) return // Skip if config is missing

  const auth = getAuth(app)
  const db = getFirestore(app)

  // Sediakan auth dan db untuk digunakan di komponen lain
  nuxtApp.provide('auth', auth)
  nuxtApp.provide('db', db)

  // State global untuk User dan Role
  const firebaseUser = useState<User | null>('firebaseUser', () => null)
  const userRole = useState<string | null>('userRole', () => null)
  const isAuthReady = useState<boolean>('isAuthReady', () => false)

  // Listen ke status autentikasi
  onAuthStateChanged(auth, async (user) => {
    firebaseUser.value = user
    
    if (user) {
      // Ambil role dari Firestore
      try {
        const userDocRef = doc(db, 'users', user.uid)
        const userDocSnap = await getDoc(userDocRef)
        if (userDocSnap.exists()) {
          userRole.value = userDocSnap.data().role || 'mahasiswa'
        } else {
          // Jika dokumen belum ada, asumsikan mahasiswa baru (akan di-handle pembuatannya nanti)
          userRole.value = 'mahasiswa'
        }
      } catch (error) {
        console.error("Error fetching user role:", error)
        userRole.value = 'mahasiswa'
      }
    } else {
      userRole.value = null
    }
    
    isAuthReady.value = true
  })
})
