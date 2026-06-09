<template>
  <div>
    <h2 class="text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
      <span class="text-3xl">🏛️</span> Tentang Universitas Terbuka Surabaya
    </h2>
    
    <div class="mt-6 space-y-6">
      <p class="text-slate-600 leading-relaxed">
        <strong>Universitas Terbuka Surabaya (UT Surabaya)</strong> adalah Perguruan Tinggi Negeri (PTN) ke-45 di Indonesia yang menerapkan sistem pendidikan terbuka dan jarak jauh (PTJJ). Sistem ini terbukti efektif untuk meningkatkan daya jangkau dan pemerataan kesempatan pendidikan tinggi yang berkualitas bagi semua warga negara Indonesia, termasuk mereka yang tinggal di daerah terpencil maupun yang sudah bekerja.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="p-5 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm flex gap-4">
          <div class="text-3xl shrink-0">🎓</div>
          <div>
            <h3 class="font-bold text-slate-900 text-base">Pendidikan Terbuka</h3>
            <p class="text-slate-600 text-sm mt-1">Sistem masuk tanpa batasan tahun kelulusan, usia, maupun jangka waktu penyelesaian studi.</p>
          </div>
        </div>
        <div class="p-5 rounded-2xl bg-amber-50 border border-amber-100 shadow-sm flex gap-4">
          <div class="text-3xl shrink-0">🌐</div>
          <div>
            <h3 class="font-bold text-slate-900 text-base">Pembelajaran Jarak Jauh</h3>
            <p class="text-slate-600 text-sm mt-1">Pembelajaran mandiri yang didukung oleh Tutorial Online (Tuton) dan Tutorial Tatap Muka (TTM).</p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-lg font-bold text-slate-800">UT Surabaya</h3>
        <p class="text-slate-600 leading-relaxed">
          Sebagai salah satu Unit Program Belajar Jarak Jauh (UPBJJ) terbesar, UT Surabaya berkomitmen memberikan pelayanan prima kepada mahasiswa di area Jabodetabek. Melalui integrasi teknologi informasi, UT Jakarta memfasilitasi mahasiswa untuk terus berprestasi secara akademis maupun non-akademis melalui wadah organisasi kemahasiswaan (Ormawa).
        </p>
      </div>

      <div class="pt-6 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
        <span class="text-xs text-slate-400 font-medium">Terakhir diperbarui: Juni 2026</span>
        <a href="https://surabaya.ut.ac.id/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-sm font-bold text-blue-900 hover:text-blue-950 hover:underline">
          Kunjungi Website Resmi UT Surabaya 
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Tentang UT | Ormawa UT Surabaya',
  meta: [
    { name: 'description', content: 'Mengenal Universitas Terbuka Surabaya, pelopor pembelajaran jarak jauh berkualitas di Indonesia.' }
  ]
})
</script>
