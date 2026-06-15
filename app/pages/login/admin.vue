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
          Masuk sebagai Admin atau Pengurus
        </p>
      </div>

      <!-- FORM ADMIN -->
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

        <!-- Pesan Error Admin -->
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
            :disabled="isAdminLoading"
            class="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-admiral hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-admiral transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span v-if="isAdminLoading">Memproses...</span>
            <span v-else>Masuk Admin</span>
          </button>
        </div>
      </form>
      
      <!-- PEMBATAS -->
      <div class="relative mt-8">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-slate-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-3 bg-white text-slate-500 font-medium">Atau Login Mahasiswa</span>
        </div>
      </div>

      <!-- FORM MAHASISWA (MAGIC LINK) -->
      <div class="space-y-4">
        <p class="text-xs text-center text-slate-500">Masukkan email Gmail Anda untuk menerima persetujuan login di inbox Anda.</p>
        
        <form @submit.prevent="sendLoginLink" v-if="!linkSent && !isVerifying">
          <div class="relative flex items-center group">
            <!-- Icon Email -->
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors group-focus-within:text-admiral">
              <svg class="h-5 w-5 text-slate-400 group-focus-within:text-admiral transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <input 
              v-model="mhsEmail" 
              type="email" 
              required 
              class="appearance-none block w-full pl-11 pr-[88px] py-3.5 border border-slate-200 placeholder-slate-400 text-slate-900 rounded-xl bg-slate-50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-admiral focus:border-admiral sm:text-sm transition-all duration-300 shadow-inner" 
              placeholder="nama@gmail.com" 
            />
            
            <button 
              type="submit" 
              :disabled="isLoadingMahasiswa"
              class="absolute right-1.5 top-1.5 bottom-1.5 flex items-center justify-center px-4 rounded-lg text-sm font-bold text-slate-900 bg-[#FFD700] hover:bg-[#FACC15] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-admiral disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              <svg v-if="isLoadingMahasiswa" class="animate-spin h-4 w-4 text-slate-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span v-else>Kirim</span>
            </button>
          </div>
        </form>

        <!-- Pesan Sukses Mhs -->
        <div v-if="linkSent" class="rounded-lg bg-green-50 p-4 border border-green-200 text-center animate-fadeIn">
          <h3 class="text-sm font-bold text-green-800 mb-1">Cek Inbox Email Anda!</h3>
          <p class="text-xs text-green-700 leading-relaxed">
            Kami telah mengirimkan tombol persetujuan login ke <br><strong class="text-green-900">{{ mhsEmail }}</strong>
          </p>
          <button @click="linkSent = false" class="mt-3 text-[11px] font-semibold text-green-700 hover:text-green-900 underline">
            Ganti Email / Kirim Ulang
          </button>
        </div>

        <!-- Pesan Verifikasi Mhs -->
        <div v-if="isVerifying" class="rounded-lg bg-blue-50 p-4 border border-blue-200 text-center animate-fadeIn">
          <svg class="animate-spin mx-auto h-6 w-6 text-blue-500 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p class="text-xs font-semibold text-blue-800">Memverifikasi Persetujuan Login...</p>
        </div>

        <!-- Pesan Error Mahasiswa -->
        <div v-if="errorMahasiswa" class="rounded-md bg-red-50 p-3 border border-red-200 text-xs text-red-700 text-center">
          {{ errorMahasiswa }}
        </div>
      </div>
      
      <div class="text-center mt-6">
        <NuxtLink to="/dashboard" class="text-sm font-medium text-slate-500 hover:text-admiral transition-colors">
          Kembali ke Beranda
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Admin State
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const errorMessage = ref('')
const isAdminLoading = ref(false)

// Mahasiswa State
const mhsEmail = ref('')
const errorMahasiswa = ref('')
const isLoadingMahasiswa = ref(false)
const linkSent = ref(false)
const isVerifying = ref(false)

// Lifecycle
onMounted(async () => {
  const { $auth, $db } = useNuxtApp()
  if (!$auth) return

  try {
    const { isSignInWithEmailLink, signInWithEmailLink } = await import('firebase/auth')
    const { doc, getDoc, setDoc } = await import('firebase/firestore')

    // Mengecek apakah ada parameter persetujuan magic link dari inbox
    if (isSignInWithEmailLink($auth, window.location.href)) {
      isVerifying.value = true
      
      // Ambil email dari cache browser
      let savedEmail = window.localStorage.getItem('emailForSignIn')
      
      // Jika kosong (browser berbeda/incognito), coba ambil otomatis dari parameter URL
      if (!savedEmail) {
        const urlParams = new URLSearchParams(window.location.search)
        savedEmail = urlParams.get('userEmail')
      }

      if (!savedEmail) {
        savedEmail = window.prompt('Tautan terdeteksi. Silakan masukkan ulang email Anda untuk konfirmasi keamanan:')
      }

      if (savedEmail) {
        try {
          const result = await signInWithEmailLink($auth, savedEmail, window.location.href)
          window.localStorage.removeItem('emailForSignIn')

          // Periksa dokumen firestore
          const userDocRef = doc($db, 'users', result.user.uid)
          const userDocSnap = await getDoc(userDocRef)
          
          if (!userDocSnap.exists()) {
            await setDoc(userDocRef, {
              uid: result.user.uid,
              email: result.user.email,
              nama: result.user.email?.split('@')[0] || 'Mahasiswa',
              role: 'mahasiswa',
              createdAt: new Date().toISOString()
            })
          }
          
          navigateTo('/dashboard/mahasiswa')
        } catch (error: any) {
          console.error('Error saat verifikasi link:', error)
          errorMahasiswa.value = 'Tautan login tidak valid, sudah digunakan, atau telah kedaluwarsa.'
        }
      } else {
        errorMahasiswa.value = 'Email diperlukan untuk menyelesaikan proses login.'
      }
      isVerifying.value = false
    }
  } catch (err) {
    console.error('Firebase Error:', err)
  }
})

// Action: Login Admin
const loginAdmin = async () => {
  errorMessage.value = ''
  isAdminLoading.value = true
  try {
    const { $auth, $db } = useNuxtApp()
    const { signInWithEmailAndPassword } = await import('firebase/auth')
    const { doc, getDoc } = await import('firebase/firestore')

    if (!$auth) {
      errorMessage.value = 'Firebase tidak dikonfigurasi. Periksa .env Anda.'
      isAdminLoading.value = false
      return
    }

    const result = await signInWithEmailAndPassword($auth, email.value, password.value)

    const userDocRef = doc($db, 'users', result.user.uid)
    const userDocSnap = await getDoc(userDocRef)
    let role = 'mahasiswa'
    if (userDocSnap.exists()) {
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
    if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      errorMessage.value = 'Email atau password salah.'
    } else {
      errorMessage.value = error.message || 'Terjadi kesalahan saat login.'
    }
  } finally {
    isAdminLoading.value = false
  }
}

// Action: Kirim Link Mahasiswa
const sendLoginLink = async () => {
  if (!mhsEmail.value) return
  
  isLoadingMahasiswa.value = true
  errorMahasiswa.value = ''
  
  try {
    const { $auth } = useNuxtApp()
    const { sendSignInLinkToEmail } = await import('firebase/auth')
    
    if (!$auth) throw new Error('Konfigurasi Firebase belum siap.')

    const actionCodeSettings = {
      // Menyisipkan parameter email ke dalam URL agar sistem tidak perlu bertanya lagi
      url: window.location.origin + window.location.pathname + '?userEmail=' + encodeURIComponent(mhsEmail.value),
      handleCodeInApp: true,
    }

    await sendSignInLinkToEmail($auth, mhsEmail.value, actionCodeSettings)
    
    window.localStorage.setItem('emailForSignIn', mhsEmail.value)
    linkSent.value = true
    
  } catch (error: any) {
    console.error('Error mengirim email link:', error)
    if (error.code === 'auth/unauthorized-continue-uri') {
       errorMahasiswa.value = 'Domain website belum diizinkan di Firebase Console.'
    } else {
       errorMahasiswa.value = error.message || 'Gagal mengirim tautan persetujuan.'
    }
  } finally {
    isLoadingMahasiswa.value = false
  }
}
</script>
