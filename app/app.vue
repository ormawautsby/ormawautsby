<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ormawa UT Surabaya',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Ormawa UT Surabaya` : 'Ormawa UT Surabaya';
  },
  link: [
    { rel: 'icon', type: 'image/jpeg', href: '/img/logo ormawa bulat.jpg' }
  ]
})
</script>
