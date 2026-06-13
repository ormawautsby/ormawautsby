<template>
  <div class="space-y-8 w-full pb-10 px-2 lg:px-4">
    
    <!-- 1. Top Header & Welcome -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h2 class="text-3xl font-extrabold text-slate-800 tracking-tight mb-1">Command Center 🚀</h2>
        <p class="text-slate-500 font-medium">Selamat datang, {{ userName }}. Berikut adalah ringkasan aktivitas hari ini.</p>
      </div>
      
      <div class="flex items-center gap-3 w-full md:w-auto">
        <button class="flex-1 md:flex-none bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-semibold py-2 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
          Tulis Berita
        </button>
        <button class="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          Buat Pengumuman
        </button>
        <button @click="logout" class="flex-1 md:flex-none bg-red-50 hover:bg-red-100 text-red-600 font-bold py-2 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          Keluar
        </button>
      </div>
    </div>

    <!-- 2. Hero Metrics (4 Cards) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <!-- Metric 1: Aspirasi -->
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 hover:shadow-md transition-shadow relative overflow-hidden group">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
        <div class="relative z-10 flex justify-between items-start">
          <div>
            <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Tiket Aspirasi</p>
            <h4 class="text-4xl font-black text-slate-800">12</h4>
            <p class="text-xs font-semibold text-orange-500 mt-2 flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span> 5 Belum Dibaca
            </p>
          </div>
          <div class="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Metric 2: Proposal -->
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-shadow relative overflow-hidden group">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
        <div class="relative z-10 flex justify-between items-start">
          <div>
            <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Proposal Masuk</p>
            <h4 class="text-4xl font-black text-slate-800">4</h4>
            <p class="text-xs font-semibold text-blue-500 mt-2 flex items-center gap-1">
              Butuh Review BEM
            </p>
          </div>
          <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Metric 3: Pengguna -->
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow relative overflow-hidden group">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
        <div class="relative z-10 flex justify-between items-start">
          <div>
            <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Total Civitas</p>
            <h4 class="text-4xl font-black text-slate-800">1,204</h4>
            <p class="text-xs font-semibold text-emerald-500 mt-2 flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
              +12 Minggu Ini
            </p>
          </div>
          <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Metric 4: Traffic -->
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-shadow relative overflow-hidden group">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
        <div class="relative z-10 flex justify-between items-start">
          <div>
            <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Kunjungan</p>
            <h4 class="text-4xl font-black text-slate-800">842</h4>
            <p class="text-xs font-semibold text-purple-500 mt-2 flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
              Trafik stabil
            </p>
          </div>
          <div class="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
        </div>
      </div>

    </div>

    <!-- Main Content Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- KIRI: Modul Manajemen Utama (1/4 width) -->
      <div class="lg:col-span-1 flex flex-col gap-4">
        <h3 class="text-xl font-bold text-slate-800 mb-2 px-2">Modul Utama</h3>
        
        <!-- CMS Module -->
        <NuxtLink to="/dashboard/admin-area/berita" class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col">
          <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
          </div>
          <h4 class="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">Manajemen Konten</h4>
          <p class="text-xs text-slate-500">Edit Berita, Banner, Agenda</p>
        </NuxtLink>

        <!-- User Module -->
        <NuxtLink to="/dashboard/admin-area/kelola-user" class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
          <h4 class="font-bold text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors">Akses & Pengguna</h4>
          <p class="text-xs text-slate-500">Role Admin, BEM, HIMA</p>
        </NuxtLink>

        <!-- E-Proposal Module -->
        <NuxtLink to="/dashboard/admin-area/proposal" class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col">
          <div class="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <h4 class="font-bold text-slate-800 mb-1 group-hover:text-purple-600 transition-colors">Arsip E-Proposal</h4>
          <p class="text-xs text-slate-500">Review & Gudang LPJ</p>
        </NuxtLink>

        <!-- Settings Module -->
        <NuxtLink to="/dashboard/admin-area/pengaturan" class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col">
          <div class="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </div>
          <h4 class="font-bold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors">Pengaturan Sistem</h4>
          <p class="text-xs text-slate-500">Konfigurasi Website</p>
        </NuxtLink>

        <!-- Notepad Admin -->
        <div class="bg-amber-50 rounded-2xl p-5 border border-amber-200 shadow-sm mt-2 flex flex-col h-64">
          <div class="flex items-center gap-2 mb-3">
            <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            <h3 class="font-bold text-amber-800">Catatan Pribadi</h3>
            <span v-if="isSavingNote" class="text-xs text-amber-600 ml-auto animate-pulse">Menyimpan...</span>
            <span v-else-if="noteSaved" class="text-xs text-green-600 ml-auto">Tersimpan</span>
          </div>
          <textarea 
            v-model="adminNote" 
            @input="debouncedSaveNote"
            class="flex-1 w-full bg-transparent border-none resize-none focus:ring-0 text-sm text-slate-700 placeholder-amber-300 p-0 outline-none"
            placeholder="Ketik catatan di sini... (otomatis tersimpan)"
          ></textarea>
        </div>
      </div>

      <!-- KANAN: Aktivitas & Inbox (3/4 width) -->
      <div class="lg:col-span-3 grid grid-cols-1 xl:grid-cols-5 gap-8">
        
        <!-- Aktivitas Terbaru (col-span-3 dari 5) -->
        <div class="xl:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-slate-800">Log Aktivitas Terbaru</h3>
            <button class="text-sm font-semibold text-blue-600 hover:text-blue-800 transition">Lihat Semua</button>
          </div>
          
          <div class="space-y-6">
            <div v-if="globalLogs.length === 0" class="text-slate-500 text-sm">Belum ada aktivitas terekam.</div>
            
            <!-- Activity Item -->
            <div v-for="log in globalLogs" :key="log.id" class="flex gap-4">
              <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div class="flex-1 pb-4 border-b border-slate-100">
                <p class="text-sm text-slate-800"><span class="font-bold text-blue-600">{{ log.aktorName }}</span> {{ log.aksi }} <span v-if="log.target">"{{ log.target }}"</span>.</p>
                <p class="text-xs text-slate-500 mt-1">{{ formatTime(log.timestamp) }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Inbox Aspirasi (col-span-2 dari 5) -->
        <div class="xl:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2">
              Inbox Aspirasi <span class="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">5 Baru</span>
            </h3>
          </div>
          
          <div class="flex-1 space-y-4">
            <!-- Message 1 -->
            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-300 transition-colors cursor-pointer group">
              <div class="flex justify-between items-start mb-2">
                <h4 class="font-bold text-sm text-slate-800 group-hover:text-blue-600 transition-colors">Anonim</h4>
                <span class="text-[10px] font-semibold text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200">10:05</span>
              </div>
              <p class="text-xs text-slate-600 line-clamp-2 mb-3">Mohon perbaiki lampu di area parkir motor B, sangat gelap saat malam hari.</p>
              <button class="text-xs font-bold text-blue-600 bg-blue-100 hover:bg-blue-200 px-3 py-1.5 rounded-lg transition-colors w-full">Balas / Proses</button>
            </div>
            
            <!-- Message 2 -->
            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-300 transition-colors cursor-pointer group">
              <div class="flex justify-between items-start mb-2">
                <h4 class="font-bold text-sm text-slate-800 group-hover:text-blue-600 transition-colors">Ahmad Ridwan</h4>
                <span class="text-[10px] font-semibold text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200">Kemarin</span>
              </div>
              <p class="text-xs text-slate-600 line-clamp-2 mb-3">Saran untuk menambahkan WiFi di area kantin baru karena susah sinyal.</p>
              <button class="text-xs font-bold text-slate-600 bg-slate-200 hover:bg-slate-300 px-3 py-1.5 rounded-lg transition-colors w-full">Lihat Detail</button>
            </div>
          </div>
          
          <button class="mt-6 text-sm font-bold text-slate-500 hover:text-blue-600 text-center w-full transition-colors">
            Buka Pusat Aspirasi &rarr;
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

// Mengaktifkan middleware auth & layout admin pada route ini
definePageMeta({
  layout: 'admin',
  middleware: ['auth']
})

const userRole = useState('userRole')
const firebaseUser = useState<any>('firebaseUser')

const userName = computed(() => {
  return firebaseUser.value?.displayName || 'Admin'
})

// Notepad Logic
const adminNote = ref('')
const isSavingNote = ref(false)
const noteSaved = ref(false)
let saveTimeout: any = null

const fetchNote = async () => {
  try {
    const { $db } = useNuxtApp()
    if (!$db || !firebaseUser.value?.uid) return
    const { doc, getDoc } = await import('firebase/firestore')
    
    const docRef = doc($db, 'users', firebaseUser.value.uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists() && docSnap.data().personalNote) {
      adminNote.value = docSnap.data().personalNote
    }
  } catch (e) {
    console.error('Error fetching note', e)
  }
}

const saveNoteToDb = async () => {
  if (!firebaseUser.value?.uid) return
  isSavingNote.value = true
  noteSaved.value = false
  try {
    const { $db } = useNuxtApp()
    const { doc, setDoc } = await import('firebase/firestore')
    const docRef = doc($db, 'users', firebaseUser.value.uid)
    
    // Gunakan setDoc dengan { merge: true } agar tidak merusak data user lain
    await setDoc(docRef, { personalNote: adminNote.value }, { merge: true })
    
    noteSaved.value = true
    setTimeout(() => { noteSaved.value = false }, 2000)
  } catch (e) {
    console.error('Error saving note', e)
  } finally {
    isSavingNote.value = false
  }
}

const debouncedSaveNote = () => {
  if (saveTimeout) clearTimeout(saveTimeout)
  noteSaved.value = false
  saveTimeout = setTimeout(() => {
    saveNoteToDb()
  }, 1000) // Auto-save after 1s of inactivity
}

// Global Activity Logs
const globalLogs = ref<any[]>([])

const formatTime = (isoString: string) => {
  if (!isoString) return ''
  const d = new Date(isoString)
  return d.toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' }) + ' WIB'
}

const fetchLogs = async () => {
  try {
    const { $db } = useNuxtApp()
    if (!$db) return
    const { collection, getDocs } = await import('firebase/firestore')
    const snap = await getDocs(collection($db, 'activityLogs'))
    const allLogs = snap.docs.map(d => ({ id: d.id, ...d.data() as any }))
    allLogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    globalLogs.value = allLogs.slice(0, 5) // ambil 5 terbaru
  } catch (error) {
    console.error('Failed to fetch global logs', error)
  }
}

onMounted(() => {
  fetchNote()
  fetchLogs()
})

const logout = async () => {
  try {
    const { $auth } = useNuxtApp()
    if ($auth) {
      const { signOut } = await import('firebase/auth')
      await signOut($auth)
    }
    navigateTo('/')
  } catch (error) {
    console.error('Logout error:', error)
  }
}

</script>
