<template>
  <div class="p-8 max-w-7xl mx-auto">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <NuxtLink to="/dashboard/admin-area" class="text-sm font-medium text-slate-500 hover:text-admiral mb-2 flex items-center gap-1">
          &larr; Kembali ke Admin Area
        </NuxtLink>
        <h1 class="text-3xl font-extrabold text-admiral mt-2">Kelola Pengguna & Role</h1>
        <p class="text-slate-500 mt-2">Buat akun akses untuk Admin dan Pengurus Organisasi.</p>
      </div>
      <button 
        @click="isModalOpen = true"
        class="px-5 py-2.5 bg-admiral text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-md flex items-center gap-2"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        Tambah Pengurus
      </button>
    </div>

    <!-- Tabel Daftar Pengguna -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <table class="min-w-full divide-y divide-slate-200">
        <thead class="bg-slate-50">
          <tr>
            <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Pengguna</th>
            <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
            <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Organisasi</th>
            <th scope="col" class="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-200">
          <!-- Data Dummy -->
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-admiral font-bold">
                  AM
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-slate-900">Admin BPH</div>
                  <div class="text-sm text-slate-500">admin.bph@ormawautsby.com</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                Admin
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
              Pusat (BPH)
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button class="text-lemon-dark hover:text-admiral mr-3">Edit</button>
              <button class="text-red-600 hover:text-red-900">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Tambah Pengurus -->
    <div v-if="isModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 class="text-lg font-bold text-slate-800">Tambah Akun Pengurus</h3>
          <button @click="isModalOpen = false" class="text-slate-400 hover:text-slate-600">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <form @submit.prevent="createUser" class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
            <input type="text" required class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-admiral focus:border-admiral sm:text-sm" placeholder="Contoh: Ketua IMF FEB">
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Email (Kode Pengguna)</label>
            <input type="email" required class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-admiral focus:border-admiral sm:text-sm" placeholder="imffeb@ormawautsby.com">
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Password Awal</label>
            <input type="text" required class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-admiral focus:border-admiral sm:text-sm" placeholder="Otomatis digenerate atau ketik di sini">
            <p class="text-xs text-slate-500 mt-1">Berikan password ini kepada pengurus untuk login pertama kali.</p>
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Role & Akses</label>
            <select required class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-admiral focus:border-admiral sm:text-sm">
              <option value="">Pilih Role...</option>
              <option value="admin">Admin (BPH Utama)</option>
              <option value="pengurus">Pengurus (Ketua IMF/UKM)</option>
            </select>
          </div>
          <div class="pt-4 flex gap-3">
            <button type="button" @click="isModalOpen = false" class="flex-1 px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors">Batal</button>
            <button type="submit" class="flex-1 px-4 py-2 bg-admiral text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors">Buat Akun</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  middleware: ['auth']
})

const isModalOpen = ref(false)

const createUser = () => {
  // TODO: Integrasi dengan Firebase Cloud Functions / Admin SDK
  alert('Simulasi: Akun berhasil dibuat! Silakan berikan Email dan Password kepada pengurus terkait.')
  isModalOpen.value = false
}
</script>
