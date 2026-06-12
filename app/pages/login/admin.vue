<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      <div class="text-center">
        <img class="mx-auto h-16 w-auto" src="/img/logo ormawa panjang.png" alt="Logo Ormawa" />
        <h2 class="mt-6 text-3xl font-extrabold text-admiral">
          Login Admin
        </h2>
        <p class="mt-2 text-sm text-slate-500">
          Masuk ke area administrator dan pengurus
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="loginAdmin">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="email-address" class="block text-sm font-medium text-slate-700">Alamat Email</label>
            <input 
              id="email-address" 
              name="email" 
              type="email" 
              autocomplete="email" 
              required 
              v-model="email"
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-400 text-slate-900 rounded-lg focus:outline-none focus:ring-admiral focus:border-admiral focus:z-10 sm:text-sm" 
              placeholder="admin@ormawautsby.com"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-slate-700">Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              autocomplete="current-password" 
              required 
              v-model="password"
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-400 text-slate-900 rounded-lg focus:outline-none focus:ring-admiral focus:border-admiral focus:z-10 sm:text-sm" 
              placeholder="••••••••"
            />
          </div>
        </div>

        <!-- Pesan Error -->
        <div v-if="errorMessage" class="rounded-md bg-red-50 p-4 border border-red-200">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">Login Gagal</h3>
              <div class="mt-2 text-sm text-red-700">
                <p>{{ errorMessage }}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button 
            type="submit" 
            class="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-admiral hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-admiral transition-all shadow-md hover:shadow-lg"
          >
            Masuk
          </button>
        </div>
      </form>
      
      <div class="text-center mt-4">
        <NuxtLink to="/dashboard" class="text-sm font-medium text-slate-500 hover:text-admiral transition-colors">
          Kembali ke Beranda
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const loginAdmin = async () => {
  errorMessage.value = ''
  try {
    const { $auth, $db } = useNuxtApp()
    const { signInWithEmailAndPassword } = await import('firebase/auth')
    const { doc, getDoc } = await import('firebase/firestore')

    if (!$auth) {
      errorMessage.value = 'Firebase tidak dikonfigurasi. Periksa .env Anda.'
      return
    }

    const result = await signInWithEmailAndPassword($auth, email.value, password.value)

    // Ambil role dari Firestore setelah login berhasil
    const userDocRef = doc($db, 'users', result.user.uid)
    const userDocSnap = await getDoc(userDocRef)
    let role = 'mahasiswa'
    if (userDocSnap.exists()) {
      role = (userDocSnap.data().role || '').trim()
    }
    console.log('Fetched role from Firestore:', role)

    // Update state global agar middleware dapat membaca role
    const userRole = useState('userRole')
    const firebaseUser = useState('firebaseUser')
    userRole.value = role
    firebaseUser.value = result.user
    console.log('Login successful, role:', role)

    // Hanya izinkan admin/super_admin untuk masuk ke admin-area
    if (role === 'admin' || role === 'super_admin' || role === 'pengurus') {
      navigateTo('/dashboard/admin-area')
      console.log('Navigated to admin area')
    } else {
      errorMessage.value = 'Akun Anda tidak memiliki akses admin.'
    }
  } catch (error: any) {
    console.error('Login error:', error)
    // Tampilkan pesan yang lebih user-friendly untuk error umum
    if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      errorMessage.value = 'Email atau password salah.'
    } else {
      errorMessage.value = error.message || 'Terjadi kesalahan saat login.'
    }
  }
}
</script>
