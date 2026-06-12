<template>
  <div class="space-y-6 max-w-6xl mx-auto">
    
    <!-- Top Welcome Header -->
    <div class="flex justify-between items-start mb-6">
      <div>
        <h2 class="text-3xl font-extrabold text-slate-800 mb-1">Halo, {{ userName }}! 👋</h2>
        <p class="text-slate-500 text-sm">Selamat datang di ruang kendali pribadimu.</p>
      </div>
      
      <!-- Profile Badge -->
      <div class="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
        <div class="text-right hidden sm:block">
          <p class="text-sm font-bold text-slate-800 leading-none">{{ userRoleFormatted }}</p>
          <p class="text-xs font-bold text-yellow-500 flex items-center justify-end gap-1 mt-1">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>
            5 XP
          </p>
        </div>
        <img class="h-10 w-10 rounded-full object-cover border-2 border-slate-200" src="https://ui-avatars.com/api/?name=User&background=random" alt="Profile" />
      </div>
    </div>

    <!-- Blue XP Banner -->
    <div class="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 text-white shadow-lg shadow-blue-500/30 relative overflow-hidden">
      <!-- Decorative background circles -->
      <div class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-5 mix-blend-overlay"></div>
      <div class="absolute bottom-0 right-32 -mb-16 w-32 h-32 rounded-full bg-white opacity-10 mix-blend-overlay"></div>
      
      <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div class="flex-1 w-full">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-bold uppercase tracking-widest text-blue-100 bg-blue-700/50 px-2 py-1 rounded-md">Level Kamu</span>
            <span class="text-yellow-400">👑</span>
          </div>
          <h3 class="text-3xl font-extrabold mb-4">Sobat UT</h3>
          
          <!-- Progress Bar -->
          <div class="max-w-md">
            <div class="w-full bg-blue-800/50 rounded-full h-2 mb-2 border border-blue-400/20">
              <div class="bg-yellow-400 h-2 rounded-full" style="width: 5%"></div>
            </div>
            <p class="text-sm text-blue-100 font-medium">5 / 100 XP menuju level berikutnya.</p>
          </div>
        </div>

        <div class="flex gap-3 w-full md:w-auto">
          <button class="flex-1 md:flex-none bg-white text-blue-600 hover:bg-slate-50 font-bold py-2.5 px-5 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
            Scan Absen
          </button>
          <button class="flex-1 md:flex-none bg-blue-700/50 hover:bg-blue-800/50 border border-blue-400/30 text-white font-bold py-2.5 px-5 rounded-xl shadow-sm transition-colors">
            Riwayat Event
          </button>
        </div>
      </div>
    </div>

    <!-- 3 Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow">
        <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
        <div>
          <h4 class="text-2xl font-black text-slate-800 leading-none mb-1">0</h4>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Event Diikuti</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow">
        <div class="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
        </div>
        <div>
          <h4 class="text-2xl font-black text-slate-800 leading-none mb-1">0</h4>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Sertifikat</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow">
        <div class="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
        </div>
        <div>
          <h4 class="text-2xl font-black text-slate-800 leading-none mb-1">0</h4>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Aspirasi</p>
        </div>
      </div>
    </div>

    <!-- Pencapaian Kampus Container -->
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
      <div class="flex items-center gap-3 mb-8">
        <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
        </div>
        <div>
          <h3 class="text-xl font-bold text-slate-800">Pencapaian Kampus</h3>
          <p class="text-sm text-slate-500">Koleksi lencana dari aktivitasmu di Ormawa UT.</p>
        </div>
      </div>

      <!-- Badges Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Active Badge -->
        <div class="border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-all group bg-white relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shadow-inner">
              <span class="text-2xl">✌️</span>
            </div>
            <h4 class="font-bold text-slate-800 mb-1">Sobat UT</h4>
            <p class="text-xs text-slate-500 mb-3 line-clamp-2">Selamat bergabung di keluarga besar UT.</p>
            <span class="inline-block bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full">0 XP</span>
          </div>
        </div>

        <!-- Locked Badges -->
        <div class="border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-all group bg-slate-50/50 relative overflow-hidden">
          <div class="relative z-10 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
            <div class="w-16 h-16 mx-auto mb-4 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9-5m9 5l9-5"></path></svg>
            </div>
            <h4 class="font-bold text-slate-800 mb-1">Partisipan Aktif</h4>
            <p class="text-xs text-slate-500 mb-3 line-clamp-2">Mulai aktif mengikuti kegiatan kampus.</p>
            <span class="inline-block bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full">100 XP</span>
          </div>
        </div>

        <div class="border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-all group bg-slate-50/50 relative overflow-hidden">
          <div class="relative z-10 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
            <div class="w-16 h-16 mx-auto mb-4 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h4 class="font-bold text-slate-800 mb-1">Aktivis Kampus</h4>
            <p class="text-xs text-slate-500 mb-3 line-clamp-2">Sering terlibat dalam event dan aspirasi.</p>
            <span class="inline-block bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full">500 XP</span>
          </div>
        </div>

        <div class="border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-all group bg-slate-50/50 relative overflow-hidden">
          <div class="relative z-10 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
            <div class="w-16 h-16 mx-auto mb-4 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center">
              <span class="text-2xl">🌟</span>
            </div>
            <h4 class="font-bold text-slate-800 mb-1">Duta Ormawa</h4>
            <p class="text-xs text-slate-500 mb-3 line-clamp-2">Sosok panutan yang berpengaruh.</p>
            <span class="inline-block bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full">1000 XP</span>
          </div>
        </div>
        
        <div class="border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-all group bg-slate-50/50 relative overflow-hidden">
          <div class="relative z-10 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
            <div class="w-16 h-16 mx-auto mb-4 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center">
              <span class="text-2xl">👑</span>
            </div>
            <h4 class="font-bold text-slate-800 mb-1">Legenda Kampus</h4>
            <p class="text-xs text-slate-500 mb-3 line-clamp-2">Pencapaian tertinggi mahasiswa.</p>
            <span class="inline-block bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full">2000 XP</span>
          </div>
        </div>

        <div class="border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-all group bg-slate-50/50 relative overflow-hidden">
          <div class="relative z-10 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
            <div class="w-16 h-16 mx-auto mb-4 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
            </div>
            <h4 class="font-bold text-slate-800 mb-1">Event Hunter</h4>
            <p class="text-xs text-slate-500 mb-3 line-clamp-2">Ikut 5 Kegiatan</p>
            <span class="inline-block bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full"><svg class="w-3 h-3 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></span>
          </div>
        </div>

        <div class="border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-all group bg-slate-50/50 relative overflow-hidden">
          <div class="relative z-10 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
            <div class="w-16 h-16 mx-auto mb-4 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
            </div>
            <h4 class="font-bold text-slate-800 mb-1">Suara Mahasiswa</h4>
            <p class="text-xs text-slate-500 mb-3 line-clamp-2">Kirim 3 Aspirasi</p>
            <span class="inline-block bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full"><svg class="w-3 h-3 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></span>
          </div>
        </div>

        <!-- Highlighted Active Badge -->
        <div class="border-2 border-blue-400 rounded-2xl p-6 text-center shadow-md bg-white relative overflow-hidden">
          <div class="absolute inset-0 bg-blue-50/30"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shadow-inner">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
            </div>
            <h4 class="font-bold text-slate-800 mb-1">Si Paling Update</h4>
            <p class="text-xs text-slate-500 mb-3 line-clamp-2">Rajin Baca Berita</p>
            <span class="inline-block bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Mengaktifkan middleware auth & layout admin pada route ini
definePageMeta({
  layout: 'admin',
  middleware: ['auth']
})

const userRole = useState('userRole')
const firebaseUser = useState<any>('firebaseUser')

const userName = computed(() => {
  return firebaseUser.value?.displayName || 'Mahasiswa'
})

const userRoleFormatted = computed(() => {
  if (userRole.value === 'super_admin') return 'Programmer (Super Admin)'
  if (userRole.value === 'admin') return 'BPH / Koord (Admin)'
  if (userRole.value === 'pengurus') return 'Ketua Organisasi'
  return 'Mahasiswa'
})
</script>
