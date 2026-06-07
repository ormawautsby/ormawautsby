// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01', // Sesuaikan dengan bawaan Nuxt Anda
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt', // Menambahkan Pinia ke dalam Nuxt
    '@nuxtjs/tailwindcss'
  ]
})