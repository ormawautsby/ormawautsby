<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div class="mb-12 border-b border-slate-100 pb-8 bg-white p-6 rounded-2xl shadow-sm">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 bg-blue-50 text-blue-700 flex items-center justify-center rounded-xl text-2xl shadow-inner border border-blue-100">
          📋
        </div>
        <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">
          Struktur Kepengurusan
        </h2>
      </div>
      <p class="text-slate-600 leading-relaxed max-w-3xl text-sm md:text-base">
        Struktur kepengurusan Organisasi Kemahasiswaan (Ormawa) UT Surabaya masa bakti saat ini terdiri dari 
        Badan Pengurus Harian (BPH) dan divisi-divisi strategis yang saling bersinergi.
      </p>
    </div>

    <div class="mb-24">
      <div class="flex items-center gap-3 mb-10 justify-center">
        <div class="h-6 w-1.5 bg-amber-400 rounded-full"></div>
        <h3 class="text-2xl font-bold text-slate-800 text-center">Badan Pengurus Harian (BPH)</h3>
        <div class="h-6 w-1.5 bg-amber-400 rounded-full"></div>
      </div>

      <div class="flex flex-col items-center relative w-full gap-4">
        <div class="w-[300px] sm:w-[340px] bg-white border border-slate-100 rounded-2xl shadow-sm p-5 flex items-center gap-5 relative overflow-hidden group hover:shadow-md transition-all">
          <div class="absolute left-0 top-0 bottom-0 w-2 bg-blue-800"></div>
          <div class="w-16 h-16 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-slate-200">
             <img v-if="ketua.photo" :src="ketua.photo" class="w-full h-full object-cover"/>
             <span v-else class="text-3xl text-slate-300">👤</span>
          </div>
          <div class="flex-1">
             <span class="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase rounded-full mb-1 border border-blue-100">{{ ketua.title }}</span>
             <h4 class="font-bold text-slate-800 text-base leading-tight">{{ ketua.name }}</h4>
             <p class="text-[11px] text-slate-500 mt-0.5">NIM: {{ ketua.nim }}</p>
          </div>
        </div>

        <div class="w-[300px] sm:w-[340px] bg-white border border-slate-100 rounded-2xl shadow-sm p-5 flex items-center gap-5 relative overflow-hidden group hover:shadow-md transition-all">
          <div class="absolute left-0 top-0 bottom-0 w-2 bg-blue-800"></div>
          <div class="w-16 h-16 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-slate-200">
             <img v-if="wakil.photo" :src="wakil.photo" class="w-full h-full object-cover"/>
             <span v-else class="text-3xl text-slate-300">👤</span>
          </div>
          <div class="flex-1">
             <span class="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase rounded-full mb-1 border border-blue-100">{{ wakil.title }}</span>
             <h4 class="font-bold text-slate-800 text-base leading-tight">{{ wakil.name }}</h4>
             <p class="text-[11px] text-slate-500 mt-0.5">NIM: {{ wakil.nim }}</p>
          </div>
        </div>

        <div class="w-full max-w-3xl flex flex-col md:flex-row justify-center items-center gap-4 mt-2">
           <div class="w-[300px] sm:w-[340px] bg-white border border-slate-100 rounded-2xl shadow-sm p-5 flex items-center gap-5 relative overflow-hidden group hover:shadow-md transition-all">
             <div class="absolute left-0 top-0 bottom-0 w-2 bg-amber-400"></div>
             <div class="w-16 h-16 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-slate-200">
               <img v-if="sekretaris.photo" :src="sekretaris.photo" class="w-full h-full object-cover"/>
               <span v-else class="text-3xl text-slate-300">👤</span>
             </div>
             <div class="flex-1">
               <span class="inline-block px-2.5 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-bold uppercase rounded-full mb-1 border border-amber-100">{{ sekretaris.title }}</span>
               <h4 class="font-bold text-slate-800 text-base leading-tight">{{ sekretaris.name }}</h4>
               <p class="text-[11px] text-slate-500 mt-0.5">NIM: {{ sekretaris.nim }}</p>
             </div>
           </div>
           
           <div class="w-[300px] sm:w-[340px] bg-white border border-slate-100 rounded-2xl shadow-sm p-5 flex items-center gap-5 relative overflow-hidden group hover:shadow-md transition-all">
             <div class="absolute left-0 top-0 bottom-0 w-2 bg-amber-400"></div>
             <div class="w-16 h-16 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-slate-200">
               <img v-if="bendahara.photo" :src="bendahara.photo" class="w-full h-full object-cover"/>
               <span v-else class="text-3xl text-slate-300">👤</span>
             </div>
             <div class="flex-1">
               <span class="inline-block px-2.5 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-bold uppercase rounded-full mb-1 border border-amber-100">{{ bendahara.title }}</span>
               <h4 class="font-bold text-slate-800 text-base leading-tight">{{ bendahara.name }}</h4>
               <p class="text-[11px] text-slate-500 mt-0.5">NIM: {{ bendahara.nim }}</p>
             </div>
           </div>
        </div>
      </div>
    </div>

    <div class="space-y-20">
      <div v-for="divisi in divisiList" :key="divisi.name" class="w-full">
        
        <div class="flex items-center justify-center gap-4 mb-10">
          <div class="h-[2px] bg-purple-400 flex-1 max-w-[100px]"></div>
          <h3 class="text-xl font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <span>{{ divisi.icon }}</span> {{ divisi.name }}
          </h3>
          <div class="h-[2px] bg-purple-400 flex-1 max-w-[100px]"></div>
        </div>

        <div class="flex flex-col items-center gap-8">
          
          <div class="w-[240px] bg-white border border-purple-100 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center relative overflow-hidden group hover:shadow-md border-t-4 border-t-purple-400 transition-all">
            <div class="w-24 h-24 rounded-full bg-slate-100 overflow-hidden border-4 border-slate-50 shadow-sm mb-4">
              <img v-if="divisi.leader.photo" :src="divisi.leader.photo" class="w-full h-full object-cover" />
              <span v-else class="text-5xl flex items-center justify-center h-full text-slate-300">👤</span>
            </div>
            <h4 class="font-bold text-slate-800 text-base tracking-tight">{{ divisi.leader.name }}</h4>
            <p class="text-[11px] text-slate-400 mt-0.5">NIM: {{ divisi.leader.nim }}</p>
            <span class="mt-3 inline-block px-3 py-0.5 bg-purple-50 text-purple-600 text-[9px] font-bold uppercase rounded-md tracking-wider border border-purple-100">
              KETUA DIVISI
            </span>
          </div>

          <div class="flex flex-wrap justify-center gap-4 w-full max-w-5xl">
            <div v-for="staff in divisi.staffs" :key="staff.name" 
                 class="w-[140px] bg-white border border-slate-100 rounded-2xl shadow-sm p-4 flex flex-col items-center text-center group hover:shadow-md transition-all">
              <div class="w-16 h-16 rounded-full bg-slate-100 overflow-hidden border-2 border-slate-50 shadow-sm mb-3">
                <img v-if="staff.photo" :src="staff.photo" class="w-full h-full object-cover" />
                <span v-else class="text-3xl flex items-center justify-center h-full text-slate-300">👤</span>
              </div>
              <h5 class="font-bold text-slate-800 text-xs tracking-tight line-clamp-2 leading-tight h-8 flex items-center justify-center">
                {{ staff.name }}
              </h5>
              <p class="text-[10px] text-slate-400 mt-0.5">NIM: {{ staff.nim }}</p>
              <span class="text-[9px] font-medium text-slate-400 mt-2">Staff</span>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="mt-20 pt-6 border-t border-slate-200 text-center text-xs text-slate-400 font-medium tracking-wide">
      Terakhir diperbarui: Juni 2026
    </div>
  </div>
</template>

<script setup lang="ts">
// Data BPH
const bphList = [
  { title: 'Ketua Umum', name: 'Daviter', nim: '043219082', photo: '' },
  { title: 'Wakil Ketua Umum', name: 'Hamba allah', nim: '043219041', photo: '' },
  { title: 'Sekretaris Umum', name: 'Abimayu', nim: '043219211', photo: '' },
  { title: 'Bendahara Umum', name: 'Milano', nim: '043219355', photo: '' }
]

const ketua = bphList[0]
const wakil = bphList[1]
const sekretaris = bphList[2]
const bendahara = bphList[3]

// Data Divisi Beserta Ketua & Anggotanya (Bisa kamu ganti & tambah sendiri disini)
const divisiList = [
  { 
    name: 'Multimedia', 
    icon: '🎬', 
    leader: { name: 'Akhtar Destio', nim: '043219001', photo: '' },
    staffs: [
      { name: 'Rifat Abi', nim: '043219002', photo: '' },
      { name: 'Siti Aminah', nim: '043219003', photo: '' },
      { name: 'Aliza Ramadhani', nim: '043219004', photo: '' },
      { name: 'Dinia Nuril', nim: '043219005', photo: '' },
      { name: 'Fajria Amala', nim: '043219006', photo: '' },
      { name: 'Muhamad Arif', nim: '043219007', photo: '' },
      { name: 'M. Iqbal', nim: '043219008', photo: '' }
    ]
  },
  { 
    name: 'Rohani, Sosial & Kesejahteraan', 
    icon: '🌱', 
    leader: { name: 'Nama Ketua Divisi', nim: '043219010', photo: '' },
    staffs: [
      { name: 'Anggota 1', nim: '043219011', photo: '' },
      { name: 'Anggota 2', nim: '043219012', photo: '' },
      { name: 'Anggota 3', nim: '043219013', photo: '' }
    ]
  }
]

useHead({
  title: 'Struktur Pengurus | Ormawa UT Surabaya',
  meta: [
    { name: 'description', content: 'Struktur kepengurusan Ormawa UT Surabaya dengan tampilan bagan klaster terpusat.' }
  ]
})
</script>