<template>
  <div class="relative">
    <button @click="profileOpen = !profileOpen" class="flex items-center gap-3 hover:bg-slate-50 p-2 rounded-lg transition">
      <div class="text-right hidden sm:block">
        <div class="text-sm font-bold text-slate-800">{{ userName }}</div>
        <div class="text-xs text-emerald-600 font-semibold uppercase tracking-wider">{{ roleLabel }}</div>
      </div>
      <div class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
        {{ initials }}
      </div>
    </button>

    <!-- Profile Dropdown -->
    <div v-if="profileOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
      <NuxtLink to="/dashboard" class="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">Beranda Publik</NuxtLink>
      <div class="border-t border-slate-100 my-1"></div>
      <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-red-600 font-medium hover:bg-red-50">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const profileOpen = ref(false)
const firebaseUser = useState<any>('firebaseUser')
const userRole = useState('userRole')

const userName = computed(() =>
  firebaseUser.value?.displayName || firebaseUser.value?.email?.split('@')[0] || 'Admin'
)

const initials = computed(() => {
  const name = userName.value
  return name.split(' ').map((n: string) => n[0]).slice(0, 2).join('').toUpperCase()
})

const roleLabel = computed(() => {
  const role = userRole.value
  if (role === 'super_admin') return 'Super Admin'
  if (role === 'admin') return 'Admin'
  return 'Pengurus'
})

const logout = async () => {
  const { $auth } = useNuxtApp()
  if ($auth) {
    const { signOut } = await import('firebase/auth')
    await signOut($auth)
    navigateTo('/login/admin')
  }
}
</script>
