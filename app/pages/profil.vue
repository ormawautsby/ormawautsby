<template>
  <div class="min-h-screen bg-gray-50 font-sans text-slate-800">
    <Navbar />
    
    <!-- Hero Banner -->
    <section class="bg-slate-900 text-white py-12 px-6 overflow-hidden relative border-b border-slate-800">
      <div class="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay" style="background-image: url('/img/Background ormawa.png'); background-size: cover; background-position: center;"></div>
      <div class="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-yellow-400">Profil Organisasi</span>
          <h1 class="text-3xl md:text-4xl font-extrabold mt-1">Ormawa UT Surabaya</h1>
          <p class="text-slate-400 text-sm mt-2 max-w-xl">Mengenal lebih dekat Universitas Terbuka Surabaya dan kepengurusan Organisasi Kemahasiswaan.</p>
        </div>
        <div class="flex items-center gap-4">
          <img src="/img/logo-ut.png" alt="Logo UT" class="h-14 w-auto bg-white rounded-full p-1.5 shadow-lg" />
          <img src="/img/logo ormawa bulat.jpg" alt="Logo Ormawa" class="h-14 w-auto rounded-full border-2 border-slate-700 shadow-lg" />
        </div>
      </div>
    </section>

    <!-- Main Content (tanpa sidebar navigasi) -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-10 shadow-sm min-h-[500px] transition-all">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

