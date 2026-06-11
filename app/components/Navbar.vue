<template>
  <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200/80 shadow-sm transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo Brand -->
        <NuxtLink to="/dashboard" class="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity">
          <img src="/img/logo ormawa panjang.png" alt="Logo Ormawa" class="h-10 w-auto" />
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-4 lg:gap-6">
          <!-- Beranda -->
          <NuxtLink 
            to="/dashboard" 
            :class="[
              'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
              isActiveLink('/dashboard') 
                ? 'bg-slate-100 text-admiral shadow-sm border border-slate-200/50' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            ]"
          >
            <!-- Home Icon -->
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Beranda
          </NuxtLink>

          <!-- Profil (Dropdown) -->
          <div class="relative group py-2">
            <NuxtLink 
              to="/profil" 
              :class="[
                'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer',
                isActiveLink('/profil') 
                  ? 'bg-slate-100 text-admiral shadow-sm border border-slate-200/50' 
                  : 'text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900'
              ]"
            >
              <!-- User Icon -->
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Profil
              <!-- Chevron Down -->
              <svg class="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </NuxtLink>

            <!-- Dropdown Menu -->
            <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              <NuxtLink to="/profil/tentang-ut" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-admiral transition-all font-medium">
                Tentang UT
              </NuxtLink>
              <NuxtLink to="/profil/tentang-ormawa" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-admiral transition-all font-medium">
                Tentang Ormawa
              </NuxtLink>
              <NuxtLink to="/profil/visi-misi" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-admiral transition-all font-medium">
                Visi & Misi
              </NuxtLink>
              <NuxtLink to="/profil/struktur-pengurus" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-admiral transition-all font-medium">
                Struktur Pengurus
              </NuxtLink>
            </div>
          </div>

          <!-- Zona Kampus -->
          <div class="relative group py-2">
            <NuxtLink 
              to="/zona-kampus" 
              :class="[
                'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer',
                isActiveLink('/zona-kampus') 
                  ? 'bg-slate-100 text-admiral shadow-sm border border-slate-200/50' 
                  : 'text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900'
              ]"
            >
              <!-- Graduation Cap Icon -->
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7"></path>
              </svg>
              Zona Kampus
              <!-- Chevron Down -->
              <svg class="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- Media -->
          <div class="relative group py-2">
            <NuxtLink 
              to="/media" 
              :class="[
                'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer',
                isActiveLink('/media') 
                  ? 'bg-slate-100 text-admiral shadow-sm border border-slate-200/50' 
                  : 'text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900'
              ]"
            >
              <!-- Newspaper Icon -->
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
              Media
              <!-- Chevron Down -->
              <svg class="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- Kontak -->
          <NuxtLink 
            to="/kontak" 
            :class="[
              'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
              isActiveLink('/kontak') 
                ? 'bg-slate-100 text-admiral shadow-sm border border-slate-200/50' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            ]"
          >
            <!-- Headset Icon -->
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1c-4.97 0-9 4.03-9 9v7a3 3 0 003 3h1a2 2 0 002-2v-3a2 2 0 00-2-2H5v-3c0-3.87 3.13-7 7-7s7 3.13 7 7v3h-1a2 2 0 00-2 2v3a2 2 0 002 2h1a3 3 0 003-3v-7c0-4.97-4.03-9-9-9z"></path>
            </svg>
            Kontak
          </NuxtLink>

          <!-- Market -->
          <NuxtLink 
            to="/market" 
            :class="[
              'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
              isActiveLink('/market') 
                ? 'bg-slate-100 text-admiral shadow-sm border border-slate-200/50' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            ]"
          >
            <!-- Shop Icon -->
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            Market
          </NuxtLink>

          <div class="h-6 w-px bg-slate-200 mx-1"></div>

          <!-- WASPADA Button -->
          <NuxtLink 
            to="/waspada" 
            class="px-4 py-2 rounded-full text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1.5 border border-red-500"
          >
            <!-- Shield Icon -->
            <svg class="w-3.5 h-3.5 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            WASPADA
          </NuxtLink>

          <!-- Masuk Button -->
          <NuxtLink 
            to="/login" 
            class="px-4 py-2 rounded-full text-xs font-bold text-admiral bg-lemon hover:bg-lemon-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1.5 border border-lemon-dark"
          >
            <!-- Login Icon -->
            <svg class="w-3.5 h-3.5 text-admiral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
            Masuk
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden text-slate-600 hover:text-admiral focus:outline-none p-1">
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden border-t border-slate-100 bg-white shadow-inner transition-all py-2 max-h-[85vh] overflow-y-auto">
      <div class="space-y-1 px-4">
        <!-- Beranda -->
        <NuxtLink 
          to="/dashboard" 
          @click="isMobileMenuOpen = false" 
          :class="[
            'flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all',
            isActiveLink('/dashboard') 
              ? 'bg-slate-100 text-admiral' 
              : 'text-slate-700 hover:bg-slate-50'
          ]"
        >
          Beranda
        </NuxtLink>

        <!-- Profil Expandable Section -->
        <div>
          <button 
            @click="toggleMobileProfil" 
            :class="[
              'flex items-center justify-between w-full px-4 py-3 text-sm font-semibold rounded-xl transition-all text-left',
              isActiveLink('/profil') 
                ? 'bg-slate-100 text-admiral' 
                : 'text-slate-700 hover:bg-slate-50'
            ]"
          >
            <span>Profil</span>
            <svg class="w-4 h-4 transition-transform duration-200" :class="isMobileProfilOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <!-- Submenu -->
          <div v-show="isMobileProfilOpen" class="pl-6 mt-1 space-y-1 border-l border-slate-100 ml-4">
            <NuxtLink 
              to="/profil/tentang-ut" 
              @click="isMobileMenuOpen = false" 
              class="block px-4 py-2 text-xs font-semibold text-slate-600 hover:text-admiral rounded-lg hover:bg-slate-50"
            >
              Tentang UT
            </NuxtLink>
            <NuxtLink 
              to="/profil/tentang-ormawa" 
              @click="isMobileMenuOpen = false" 
              class="block px-4 py-2 text-xs font-semibold text-slate-600 hover:text-admiral rounded-lg hover:bg-slate-50"
            >
              Tentang Ormawa
            </NuxtLink>
            <NuxtLink 
              to="/profil/visi-misi" 
              @click="isMobileMenuOpen = false" 
              class="block px-4 py-2 text-xs font-semibold text-slate-600 hover:text-admiral rounded-lg hover:bg-slate-50"
            >
              Visi & Misi
            </NuxtLink>
            <NuxtLink 
              to="/profil/struktur-pengurus" 
              @click="isMobileMenuOpen = false" 
              class="block px-4 py-2 text-xs font-semibold text-slate-600 hover:text-admiral rounded-lg hover:bg-slate-50"
            >
              Struktur Pengurus
            </NuxtLink>
          </div>
        </div>

        <!-- Zona Kampus -->
        <NuxtLink 
          to="/zona-kampus" 
          @click="isMobileMenuOpen = false" 
          :class="[
            'flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all',
            isActiveLink('/zona-kampus') 
              ? 'bg-slate-100 text-admiral' 
              : 'text-slate-700 hover:bg-slate-50'
          ]"
        >
          Zona Kampus
        </NuxtLink>

        <!-- Media -->
        <NuxtLink 
          to="/media" 
          @click="isMobileMenuOpen = false" 
          :class="[
            'flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all',
            isActiveLink('/media') 
              ? 'bg-slate-100 text-admiral' 
              : 'text-slate-700 hover:bg-slate-50'
          ]"
        >
          Media
        </NuxtLink>

        <!-- Kontak -->
        <NuxtLink 
          to="/kontak" 
          @click="isMobileMenuOpen = false" 
          :class="[
            'flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all',
            isActiveLink('/kontak') 
              ? 'bg-slate-100 text-admiral' 
              : 'text-slate-700 hover:bg-slate-50'
          ]"
        >
          Kontak
        </NuxtLink>

        <!-- Market -->
        <NuxtLink 
          to="/market" 
          @click="isMobileMenuOpen = false" 
          :class="[
            'flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all',
            isActiveLink('/market') 
              ? 'bg-slate-100 text-admiral' 
              : 'text-slate-700 hover:bg-slate-50'
          ]"
        >
          Market
        </NuxtLink>
      </div>

      <!-- Action Buttons in Mobile Menu -->
      <div class="px-6 py-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
        <!-- WASPADA -->
        <NuxtLink 
          to="/waspada" 
          @click="isMobileMenuOpen = false" 
          class="flex justify-center items-center gap-2 w-full py-3 rounded-xl bg-red-600 text-sm font-bold text-white hover:bg-red-700 shadow border border-red-500"
        >
          <svg class="w-4 h-4 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          WASPADA
        </NuxtLink>

        <!-- Masuk -->
        <NuxtLink 
          to="/login" 
          @click="isMobileMenuOpen = false" 
          class="flex justify-center items-center gap-2 w-full py-3 rounded-xl bg-lemon text-sm font-bold text-admiral hover:bg-lemon-dark shadow border border-lemon-dark"
        >
          <svg class="w-4 h-4 text-admiral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
          </svg>
          Masuk / Admin
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isMobileProfilOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleMobileProfil = () => {
  isMobileProfilOpen.value = !isMobileProfilOpen.value
}

const isActiveLink = (link: string) => {
  if (link === '/profil') {
    return route.path.startsWith('/profil') || route.path.startsWith('/profile')
  }
  return route.path === link
}
</script>

<style scoped>
/* Transisi untuk kehalusan dropdown */
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
.group:hover .group-hover\:visible {
  visibility: visible;
}
</style>
