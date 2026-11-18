<script setup lang="ts">
// Otomatis arahkan dari /profil ke /profil/tentang-ut dengan status 301 Permanent Redirect untuk SEO
await navigateTo('/profil/tentang-ut', { redirectCode: 301 })
</script>
