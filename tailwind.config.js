/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Biru Admiral (Navy Gelap Elegan)
        admiral: {
          light: '#2A4365', 
          DEFAULT: '#1B365D', 
          dark: '#112240', 
        },
        // Kuning Lemon (Cerah & Enerjik)
        lemon: {
          light: '#FEF08A', 
          DEFAULT: '#FDE047', 
          dark: '#EAB308', 
        }
      }
    },
  },
  plugins: [],
}
