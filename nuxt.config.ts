// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // Tambahkan ini untuk mematikan Server-Side Rendering & Prerender yang error tadi
  ssr: false, 
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: []
    }
  },

  // Runtime Config for Firebase (Tetap seperti milik Anda)
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
  },
})
  // Mode SPA — menghasilkan satu index.html yang cocok untuk Firebase Hosting
  ssr: false,

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,       // Aktifkan agar Nuxt menemukan semua halaman
      routes: ['/']            // Mulai crawl dari halaman utama
    }
  }
})