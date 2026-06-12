export default defineNuxtRouteMiddleware((to, from) => {
  // Gunakan state yang diset oleh plugin firebase.client.ts
  const firebaseUser = useState('firebaseUser')
  const userRole = useState('userRole')
  const isAuthReady = useState('isAuthReady')
  // Skip middleware checks until auth state is initialized
  if (!isAuthReady.value) {
    return // allow navigation to proceed
  }

  // Jika auth belum siap saat inisialisasi awal, kita biarkan dulu atau tangani di komponen dengan loading state.
  // Untuk kesederhanaan, kita anggap middleware ini berjalan client-side setelah auth siap, atau server-side tanpa sesi untuk SPA
  
  const isAuthenticated = !!firebaseUser.value
  const role = userRole.value as string

  console.log('AUTH MIDDLEWARE RAN! To:', to.path)
  console.log('isAuthenticated:', isAuthenticated, 'role:', role)

  // 1. Cek apakah route membutuhkan autentikasi (misal semua route di /dashboard/admin-area)
  if (to.path.startsWith('/dashboard/admin-area')) {
    if (!isAuthenticated) {
      return navigateTo('/login/admin')
    }
    
    // 2. Cek Role Hierarchy
    // Hanya super_admin dan admin yang boleh masuk admin-area
    const allowedRoles = ['super_admin', 'admin']
    if (!allowedRoles.includes(role)) {
      console.log('ROLE REJECTED! Allowed:', allowedRoles, 'Got:', role)
      // Jika role tidak sesuai, lemparkan kembali ke beranda dashboard
      return navigateTo('/dashboard', { 
        replace: true 
      })
    }
    console.log('ROLE ACCEPTED! Proceeding to admin-area.')
  }

  // Cek untuk route organisasi khusus pengurus
  if (to.path.startsWith('/dashboard/organisasi/kelola')) {
    if (!isAuthenticated) {
      return navigateTo('/login/mahasiswa')
    }

    const allowedRoles = ['super_admin', 'admin', 'pengurus']
    if (!allowedRoles.includes(role)) {
      return navigateTo('/dashboard', { replace: true })
    }
  }
})
