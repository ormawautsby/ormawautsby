<script setup lang="ts">
// Redirect halaman utama (/) ke landing page publik dengan status 301 Permanent Redirect untuk SEO
await navigateTo('/beranda', { redirectCode: 301 })
</script>
