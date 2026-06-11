// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

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