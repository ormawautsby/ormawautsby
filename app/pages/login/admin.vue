<template>
  <div 
    class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
    style="background-image: url('/img/acarautsurabaya.png');"
  >
    <!-- Dark overlay for better readability -->
    <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>

    <div class="max-w-md w-full space-y-8 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 relative z-10">
      <div class="text-center">
        <img class="mx-auto h-16 w-auto" src="/img/Favicon_bulat_transparan.png" alt="Logo Ormawa" />
        <h2 class="mt-6 text-3xl font-extrabold text-admiral">
          Portal Login
        </h2>
        <p class="mt-2 text-sm text-slate-500">
          Masuk sebagai Admin
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="loginAdmin">
        <div class="rounded-md shadow-sm space-y-2">
          <div>
            <label for="email-address" class="block text-sm font-medium text-slate-700">Email Resmi</label>
            <input 
              id="email-address" 
              name="email" 
              type="email" 
              autocomplete="email" 
              required 
              v-model="email"
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-400 text-slate-900 rounded-lg focus:outline-none focus:ring-admiral focus:border-admiral focus:z-10 sm:text-sm" 
              placeholder="Contoh: ukmp3ib@ormawautsby.com"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-slate-700">Kata Sandi</label>
            <div class="mt-1 relative">
              <input 
                id="password" 
                name="password" 
                :type="showPassword ? 'text' : 'password'" 
                autocomplete="current-password" 
                required 
                v-model="password"
                class="appearance-none block w-full pl-3 pr-10 py-2 border border-slate-300 placeholder-slate-400 text-slate-900 rounded-lg focus:outline-none focus:ring-admiral focus:border-admiral focus:z-10 sm:text-sm" 
                placeholder="••••••••"
              />
              <button 
                type="button" 
                @click="showPassword = !showPassword" 
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-admiral"
                title="Lihat/Sembunyikan Password"
              >
                <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
              </button>
            </div>
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

        <div class="relative mt-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-slate-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-slate-500">Mahasiswa Umum</span>
          </div>
        </div>

        <button 
          type="button"
          @click="loginWithGoogle" 
          class="w-full mt-6 flex justify-center items-center gap-3 py-3 px-4 border border-slate-300 rounded-xl shadow-sm bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-admiral"
        >
          <!-- Google Icon -->
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Masuk dengan Google
        </button>
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
const showPassword = ref(false)
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

    // Redirect berdasarkan role
    if (role === 'admin' || role === 'super_admin' || role === 'pengurus') {
      navigateTo('/dashboard/admin-area')
    } else if (role === 'mahasiswa') {
      navigateTo('/dashboard/mahasiswa')
    } else {
      errorMessage.value = 'Akun Anda tidak memiliki akses yang valid.'
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

const loginWithGoogle = async () => {
  errorMessage.value = ''
  try {
    const { $auth, $db } = useNuxtApp()
    const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth')
    const { doc, getDoc, setDoc } = await import('firebase/firestore')
    
    if (!$auth) {
      errorMessage.value = 'Firebase tidak dikonfigurasi. Periksa .env Anda.'
      return
    }

    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup($auth, provider)
    
    const userDocRef = doc($db, 'users', result.user.uid)
    const userDocSnap = await getDoc(userDocRef)
    let role = 'mahasiswa'
    
    if (!userDocSnap.exists()) {
      await setDoc(userDocRef, {
        uid: result.user.uid,
        email: result.user.email,
        nama: result.user.displayName || '',
        role: 'mahasiswa',
        createdAt: new Date().toISOString()
      })
    } else {
      role = (userDocSnap.data().role || '').trim()
    }

    const userRole = useState('userRole')
    const firebaseUser = useState('firebaseUser')
    userRole.value = role
    firebaseUser.value = result.user

    if (role === 'admin' || role === 'super_admin' || role === 'pengurus') {
      navigateTo('/dashboard/admin-area')
    } else if (role === 'mahasiswa') {
      navigateTo('/dashboard/mahasiswa')
    } else {
      errorMessage.value = 'Akun Anda tidak memiliki akses yang valid.'
    }
    
  } catch (error: any) {
    console.error('Login error:', error)
    errorMessage.value = error.message || 'Terjadi kesalahan saat login.'
  }
}
</script>
