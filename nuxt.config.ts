// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Aktifkan SSR agar rute API server bisa berjalan
  ssr: true,

  nitro: {
    preset: 'firebase',
    firebase: {
      gen: 2
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        'firebase/app',
        'firebase/auth',
        'firebase/firestore'
      ]
    }
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  site: {
    url: 'https://ormawa-utsurabaya.web.app',
    name: 'Ormawa UT Surabaya'
  },

  // Runtime Config for Firebase
  runtimeConfig: {
    firebaseAdminKey: process.env.FIREBASE_ADMIN_KEY,
    public: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID
    }
  }
})