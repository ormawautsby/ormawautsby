<template>
  <main class="min-h-screen bg-gray-50 font-sans text-slate-800">
    <!-- 1. NAVIGATION BAR -->
    <Navbar />

    <!-- Hero Section -->
    <section class="relative bg-admiral text-white py-20 px-6 md:px-12 overflow-hidden">
      <!-- Background Image -->
      <NuxtImg src="/img/Background ormawa.png" alt="Background" class="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" format="webp" loading="lazy" />
      
      <div class="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <!-- Hero Text -->
        <div class="flex-1 space-y-6">
          <div class="flex flex-wrap items-center gap-4 mb-4">
            <NuxtImg src="/img/Favicon_bulat_transparan.png" alt="Logo Ormawa" class="h-14 w-auto rounded-full shadow-lg" format="webp" loading="lazy" />
            <div class="inline-block px-3 py-1 bg-slate-800 border border-slate-700 text-lemon text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
              Sistem Informasi Resmi
            </div>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Pusat Kegiatan & <br/> 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-lemon to-lemon-light">Aktivitas Mahasiswa</span>
          </h2>
          <p class="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl">
            Kelola agenda, pantau aktivitas, dan tingkatkan kolaborasi divisi secara terpadu dan profesional melalui portal organisasi.
          </p>
          <div class="flex flex-wrap gap-4 pt-4">
            <button class="px-6 py-3 bg-lemon text-admiral font-bold rounded-lg hover:bg-lemon-dark transition-all transform hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(255,204,0,0.39)] focus:ring-2 focus:ring-offset-2 focus:ring-offset-admiral focus:ring-lemon">
              Jelajahi Agenda
            </button>
            <button class="px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-offset-admiral focus:ring-white">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
        
        <!-- Hero Graphic (Mock Dashboard Preview) -->
        <div class="flex-1 w-full flex justify-center md:justify-end">
          <div class="relative w-full max-w-md aspect-square bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden p-6 flex flex-col gap-4">
            <div class="flex gap-2 items-center border-b border-slate-700 pb-4">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-lemon"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
              <div class="ml-2 text-xs text-slate-400 font-mono">Live Dashboard Overview</div>
            </div>
            <!-- Mock UI Elements -->
            <div class="flex-1 flex gap-4">
               <div class="w-1/3 bg-slate-700/50 rounded-xl animate-pulse"></div>
               <div class="w-2/3 flex flex-col gap-4">
                 <div class="h-1/2 bg-slate-700/50 rounded-xl animate-pulse" style="animation-delay: 0.2s"></div>
                 <div class="h-1/2 bg-slate-700/50 rounded-xl animate-pulse" style="animation-delay: 0.4s"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="max-w-6xl mx-auto px-6 md:px-12 py-12 -mt-12 relative z-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="stat in stats" :key="stat.label" class="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all group">
          <div class="w-14 h-14 rounded-full bg-slate-50 text-admiral flex items-center justify-center mb-4 group-hover:bg-admiral group-hover:text-lemon transition-colors">
            <component :is="stat.icon" />
          </div>
          <h3 class="text-3xl font-extrabold text-admiral mb-1">{{ stat.value }}</h3>
          <p class="text-sm text-slate-500 font-medium">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Upcoming Agenda Preview Section -->
    <section class="max-w-6xl mx-auto px-6 md:px-12 py-12 mb-12">
      <div class="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
        <div>
          <h2 class="text-3xl font-bold text-admiral tracking-tight">Agenda Terdekat</h2>
          <p class="text-slate-500 mt-1">Pantau kegiatan terbaru dari organisasi</p>
        </div>
        <NuxtLink to="/agenda" class="text-slate-600 hover:text-admiral font-semibold text-sm flex items-center gap-1 group transition-colors">
          Lihat Semua 
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </NuxtLink>
      </div>

      <!-- Agenda Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="event in upcomingEvents" :key="event.id" class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all transform hover:-translate-y-1 overflow-hidden flex flex-col group cursor-pointer">
          <!-- Card Header Image/Pattern -->
          <div class="h-36 relative overflow-hidden bg-slate-100">
            <div class="absolute inset-0 opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" :class="getCategoryPattern(event.category)"></div>
            <!-- Overlay Gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-admiral/60 to-transparent"></div>
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 text-xs font-bold rounded-full shadow-md backdrop-blur-sm" :class="event.status === 'Upcoming' ? 'bg-lemon text-admiral' : 'bg-white/90 text-slate-700'">
                {{ event.status }}
              </span>
            </div>
            <!-- Category Tag on Image -->
            <div class="absolute bottom-4 left-4">
              <span class="text-xs font-bold px-2.5 py-1 bg-admiral/80 text-white rounded-md backdrop-blur-sm border border-slate-700/50">
                {{ event.category }}
              </span>
            </div>
          </div>
          
          <!-- Card Body -->
          <div class="p-6 flex-1 flex flex-col">
            <div class="flex items-center gap-2 mb-3 text-slate-500">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
               <time class="text-xs font-bold uppercase tracking-wider">{{ formatDate(event.date) }}</time>
            </div>
            <h3 class="text-xl font-bold text-admiral mb-2 line-clamp-2 group-hover:text-slate-700 transition-colors">{{ event.title }}</h3>
            <p class="text-slate-600 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">{{ event.description }}</p>
            
            <div class="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div class="flex -space-x-2">
                <!-- Mock Avatars for Participants -->
                <div class="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">A</div>
                <div class="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">B</div>
                <div class="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">+</div>
              </div>
              <span class="text-admiral group-hover:text-yellow-500 font-bold text-sm flex items-center gap-1 transition-colors">
                Detail <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import { computed, h, ref } from 'vue'
// import { useOrmawaStore } from '@/stores/ormawa' // Uncomment jika store sudah ada



// ==========================================
// TYPES & INTERFACES
// ==========================================
type EventCategory = 'Workshop' | 'Competition' | 'Social' | 'Meeting'
type EventStatus = 'Upcoming' | 'Passed' | 'Ongoing'

interface AgendaEvent {
  id: string
  title: string
  date: string
  description: string
  category: EventCategory
  status: EventStatus
}

interface StatItem {
  label: string
  value: string | number
  icon: any
}

// ==========================================
// STATE MANAGEMENT & PINIA INTEGRATION
// ==========================================
// Contoh integrasi asli dengan Pinia:
// const store = useOrmawaStore()
// const upcomingEvents = computed(() => store.events.filter(e => e.status === 'Upcoming').slice(0, 3))

// Mock State untuk presentasi Landing Page
const mockEvents: AgendaEvent[] = [
  {
    id: 'e1',
    title: 'Pelatihan Kepemimpinan Mahasiswa 2024 (LDKM)',
    date: '2024-07-15T09:00:00',
    description: 'Kegiatan tahunan wajib untuk melatih jiwa kepemimpinan mahasiswa baru dan persiapan regenerasi pengurus masa bakti selanjutnya.',
    category: 'Workshop',
    status: 'Upcoming'
  },
  {
    id: 'e2',
    title: 'Lomba Inovasi Teknologi Nasional',
    date: '2024-08-01T08:00:00',
    description: 'Kompetisi menulis karya ilmiah dan inovasi dengan tema "Teknologi Tepat Guna di Era Society 5.0".',
    category: 'Competition',
    status: 'Upcoming'
  },
  {
    id: 'e3',
    title: 'Bakti Sosial & Desa Binaan',
    date: '2024-08-20T07:00:00',
    description: 'Penyaluran bantuan, edukasi kesehatan, serta perbaikan fasilitas desa di wilayah mitra binaan BEM.',
    category: 'Social',
    status: 'Upcoming'
  }
]

const upcomingEvents = computed(() => mockEvents)

// ==========================================
// INLINE ICONS (Render Functions)
// ==========================================
const UsersIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-7 h-7' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
])
const CalendarIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-7 h-7' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' })
])
const DocumentIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-7 h-7' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
])
const AwardIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', class: 'w-7 h-7' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' })
])

// ==========================================
// DATA MAPS
// ==========================================
const stats: StatItem[] = [
  { label: 'Anggota Aktif', value: '1,240', icon: UsersIcon },
  { label: 'Agenda Tahun Ini', value: '45+', icon: CalendarIcon },
  { label: 'Proposal & LPJ', value: '120', icon: DocumentIcon },
  { label: 'Penghargaan', value: '15', icon: AwardIcon },
]

// ==========================================
// UTILITIES
// ==========================================
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).format(date)
}

const getCategoryPattern = (category: EventCategory) => {
  const patterns: Record<EventCategory, string> = {
    Workshop: 'bg-blue-500',
    Competition: 'bg-orange-500',
    Social: 'bg-emerald-500',
    Meeting: 'bg-slate-500'
  }
  return patterns[category] || patterns.Meeting
}
</script>
