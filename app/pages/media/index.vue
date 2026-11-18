<script setup lang="ts">
// Redirect parent route /media ke /media/artikel dengan 301 Permanent
await navigateTo('/media/artikel', { redirectCode: 301 })
</script>

