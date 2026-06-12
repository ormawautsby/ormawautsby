<template>
  <div class="p-8 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-extrabold text-admiral">Admin Area</h1>
      <p class="text-slate-500 mt-2">Pusat pengelolaan website, pengguna, dan role.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <h3 class="text-lg font-bold text-slate-800 mb-2">Kelola User</h3>
        <p class="text-sm text-slate-500 mb-4">Tambah, edit, atau hapus data pengguna dan hak akses.</p>
        <NuxtLink to="/dashboard/admin-area/kelola-user" class="inline-block text-sm font-semibold text-lemon-dark hover:text-admiral">Masuk &rarr;</NuxtLink>
      </div>
      
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <h3 class="text-lg font-bold text-slate-800 mb-2">Kelola Organisasi</h3>
        <p class="text-sm text-slate-500 mb-4">Manajemen data IMF dan UKM yang terdaftar.</p>
        <button class="text-sm font-semibold text-lemon-dark hover:text-admiral">Masuk &rarr;</button>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <h3 class="text-lg font-bold text-slate-800 mb-2">Kelola Berita & Event</h3>
        <p class="text-sm text-slate-500 mb-4">Persetujuan dan publikasi informasi kegiatan.</p>
        <button class="text-sm font-semibold text-lemon-dark hover:text-admiral">Masuk &rarr;</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Mengaktifkan middleware auth pada route ini
definePageMeta({
  middleware: ['auth']
})
</script>
