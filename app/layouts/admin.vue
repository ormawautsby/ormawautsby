<template>
  <div class="min-h-screen bg-admin-bg font-sans selection:bg-admin-accent/30 text-admin-text">
    
    <!-- Sidebar (Fixed Left) -->
    <AdminSidebar />

    <!-- Main Wrapper -->
    <div class="flex flex-col min-h-screen">
      <!-- Page Content Area -->
      <main class="flex-1 ml-64 p-8 bg-slate-50 relative">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Admin Layout Wrapper
// Memastikan semua halaman di dalam /dashboard/admin-area terbungkus layout ini
</script>

<style>
/* Global scrollbar styling for admin area */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #151521;
}
::-webkit-scrollbar-thumb {
  background: #2b2b40;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #3f3f5a;
}
</style>
