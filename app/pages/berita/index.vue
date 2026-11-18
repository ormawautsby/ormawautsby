<script setup lang="ts">
// Redirect parent route /berita ke daftar artikel publik (/media/artikel) dengan 301 Permanent
await navigateTo('/media/artikel', { redirectCode: 301 })
</script>

