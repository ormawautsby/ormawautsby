<template>
  <main class="min-h-screen bg-gray-50 font-sans text-slate-800">
    <!-- NAVIGATION BAR -->
    <Navbar />

    <!-- Hero Section -->
    <section class="relative bg-slate-900 text-white py-20 px-6 md:px-12 overflow-hidden">
      <!-- Background Image -->
      <div
        class="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
        style="background-image: url('/img/Background ormawa.png'); background-size: cover; background-position: center;"
      ></div>

      <div class="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <!-- Hero Text -->
        <div class="flex-1 space-y-6">
          <div class="flex flex-wrap items-center gap-4 mb-4">
            <img src="/img/Favicon.png" alt="Logo Ormawa" class="h-12 w-auto rounded-full shadow-lg" />
            <div class="inline-block px-3 py-1 bg-slate-800 border border-slate-700 text-green-400 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
              Kontak Prodi 2026
            </div>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            WA Prodi <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">Angkatan 2026</span>
          </h2>
          <p class="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl">
            Temukan kontak WhatsApp resmi setiap program studi angkatan 2026 di Universitas Terbuka Surabaya. Hubungi langsung koordinator prodi Anda.
          </p>
        </div>

        <!-- Hero Graphic -->
        <div class="flex-1 w-full flex justify-center md:justify-end">
          <div class="relative w-full max-w-md aspect-square bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden p-6 flex flex-col gap-4">
            <div class="flex gap-2 items-center border-b border-slate-700 pb-4">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
              <div class="ml-2 text-xs text-slate-400 font-mono">WA Prodi 2026</div>
            </div>
            <div class="flex-1 flex gap-4 flex-col">
              <div class="h-1/4 bg-slate-700/50 rounded-xl animate-pulse"></div>
              <div class="h-1/2 bg-slate-700/50 rounded-xl animate-pulse" style="animation-delay: 0.2s"></div>
              <div class="h-1/4 bg-slate-700/50 rounded-xl animate-pulse" style="animation-delay: 0.4s"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-5xl mx-auto px-4 py-12">

      <!-- ✅ SHORTCUT: Grup WhatsApp OSMB 2026.2 -->
      <div class="mb-8 flex justify-center">
        <a
          :href="waGrupOsmb"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-4 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl px-8 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-300"
        >
          <!-- WhatsApp Icon -->
          <div class="flex-shrink-0 w-12 h-12 bg-green-500 group-hover:bg-green-600 rounded-full flex items-center justify-center transition-colors shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <!-- Text -->
          <div>
            <p class="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Bergabung Sekarang</p>
            <p class="text-gray-800 font-bold text-lg leading-tight group-hover:text-green-700 transition-colors">Grup WhatsApp Prodi OSMB 2026.2</p>
          </div>
          <!-- Arrow -->
          <div class="flex-shrink-0 ml-2 text-gray-300 group-hover:text-green-500 transition-colors">
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </a>
      </div>

      <!-- Search Bar -->
      <div class="mb-8">
        <div class="relative">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari nama prodi..."
            class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition shadow-sm"
          />
        </div>
      </div>


      <!-- Prodi Cards Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="prodi in filteredProdi"
          :key="prodi.nama"
          class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 p-6 flex flex-col gap-4"
        >
          <!-- Prodi Header -->
          <div class="flex items-start gap-3">
            <div class="text-3xl">{{ prodi.icon }}</div>
            <div>
              <h3 class="font-bold text-gray-800 leading-tight">{{ prodi.nama }}</h3>
              <span class="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full"
                :class="prodi.badgeClass">
                {{ prodi.fakultas }}
              </span>
            </div>
          </div>

          <!-- WA Link -->
          <a
            :href="prodi.waLink"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition group"
          >
            <div class="text-xl">💬</div>
            <div class="flex-1 min-w-0">
              <p class="text-xs text-gray-500">WhatsApp Grup Prodi</p>
              <p class="text-green-700 font-semibold text-sm truncate group-hover:underline">{{ prodi.nomorWa }}</p>
            </div>
            <div class="text-green-500 text-lg">→</div>
          </a>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProdi.length === 0" class="text-center py-16 text-gray-400">
        <div class="text-5xl mb-4">🔍</div>
        <p class="text-lg font-semibold">Prodi tidak ditemukan</p>
        <p class="text-sm mt-1">Coba kata kunci lain</p>
      </div>

      <!-- Info Footer -->
      <section class="mt-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 text-center">
        <h3 class="text-2xl font-bold text-gray-800 mb-3">Ormawa UT Surabaya</h3>
        <p class="text-gray-600 text-lg mb-4">
          Kontak ini merupakan daftar WhatsApp resmi koordinator program studi angkatan 2026.
        </p>
        <p class="text-green-600 font-semibold">Bersinergi membangun prestasi.</p>
      </section>
    </div>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useHead({
  title: 'WA Prodi 2026 - Ormawa UT Surabaya',
  meta: [
    { name: 'description', content: 'Daftar kontak WhatsApp resmi program studi angkatan 2026 Universitas Terbuka Surabaya.' }
  ]
})

const searchQuery = ref('')

// ✅ Ganti URL ini dengan link grup WhatsApp OSMB 2026.2 Anda
const waGrupOsmb = ref('https://chat.whatsapp.com/GANTI_LINK_GRUP_DISINI')

const prodiList = [
  {
    nama: 'Manajemen',
    fakultas: 'FEKON',
    icon: '📊',
    nomorWa: '+62 812-0000-0001',
    waLink: 'https://wa.me/6281200000001',
    badgeClass: 'bg-blue-100 text-blue-700'
  },
  {
    nama: 'Akuntansi',
    fakultas: 'FEKON',
    icon: '🧾',
    nomorWa: '+62 812-0000-0002',
    waLink: 'https://wa.me/6281200000002',
    badgeClass: 'bg-blue-100 text-blue-700'
  },
  {
    nama: 'Ilmu Hukum',
    fakultas: 'FHISIP',
    icon: '⚖️',
    nomorWa: '+62 812-0000-0003',
    waLink: 'https://wa.me/6281200000003',
    badgeClass: 'bg-purple-100 text-purple-700'
  },
  {
    nama: 'Ilmu Komunikasi',
    fakultas: 'FHISIP',
    icon: '📡',
    nomorWa: '+62 812-0000-0004',
    waLink: 'https://wa.me/6281200000004',
    badgeClass: 'bg-purple-100 text-purple-700'
  },
  {
    nama: 'Administrasi Publik',
    fakultas: 'FHISIP',
    icon: '🏛️',
    nomorWa: '+62 812-0000-0005',
    waLink: 'https://wa.me/6281200000005',
    badgeClass: 'bg-purple-100 text-purple-700'
  },
  {
    nama: 'Sistem Informasi',
    fakultas: 'FST',
    icon: '💻',
    nomorWa: '+62 812-0000-0006',
    waLink: 'https://wa.me/6281200000006',
    badgeClass: 'bg-green-100 text-green-700'
  },
  {
    nama: 'Statistika',
    fakultas: 'FST',
    icon: '📈',
    nomorWa: '+62 812-0000-0007',
    waLink: 'https://wa.me/6281200000007',
    badgeClass: 'bg-green-100 text-green-700'
  },
  {
    nama: 'PGSD',
    fakultas: 'FKIP',
    icon: '📚',
    nomorWa: '+62 812-0000-0008',
    waLink: 'https://wa.me/6281200000008',
    badgeClass: 'bg-orange-100 text-orange-700'
  },
  {
    nama: 'PGPAUD',
    fakultas: 'FKIP',
    icon: '🎨',
    nomorWa: '+62 812-0000-0009',
    waLink: 'https://wa.me/6281200000009',
    badgeClass: 'bg-orange-100 text-orange-700'
  },
]

const filteredProdi = computed(() => {
  if (!searchQuery.value.trim()) return prodiList
  const q = searchQuery.value.toLowerCase()
  return prodiList.filter(p =>
    p.nama.toLowerCase().includes(q) ||
    p.fakultas.toLowerCase().includes(q)
  )
})
</script>

<style scoped>
button, a {
  transition: all 0.3s ease;
}
</style>
