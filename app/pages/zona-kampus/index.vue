<script setup lang="ts">
// Redirect parent route /zona-kampus ke /zona-kampus/akademik dengan 301 Permanent
await navigateTo('/zona-kampus/akademik', { redirectCode: 301 })
</script>

