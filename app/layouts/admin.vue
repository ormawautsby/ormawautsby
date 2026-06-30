<template>
  <div class="h-screen flex flex-col font-sans bg-white overflow-hidden text-slate-700">

    <!-- Top Navigation Bar (style sandbox) -->
    <header class="h-16 border-b border-slate-200 flex items-center justify-between px-4 shrink-0 bg-white z-20">
      <div class="flex items-center gap-4">
        <!-- Logo -->
        <div class="w-60 flex items-center gap-3">
          <img src="/img/Favicon_bulat_transparan.png" alt="Logo" class="h-9 w-auto drop-shadow-sm" />
          <div>
            <span class="text-lg font-bold text-emerald-600 tracking-tight">ORMAWA</span>
            <p class="text-[10px] text-slate-400 font-medium uppercase tracking-widest leading-none">Admin Panel</p>
          </div>
        </div>
      </div>

      <!-- User Profile (style sandbox) -->
      <AdminHeaderProfile />
    </header>

    <!-- Main Content Area with Sidebar -->
    <div class="flex flex-1 overflow-hidden relative">
      <!-- Sidebar -->
      <AdminSidebar />

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Admin Layout - Sandbox Style
</script>

<style>
/* Scrollbar styling untuk area admin */
.admin-scroll::-webkit-scrollbar { width: 6px; }
.admin-scroll::-webkit-scrollbar-track { background: #f8fafc; }
.admin-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
.admin-scroll::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
</style>
