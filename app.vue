<script setup lang="ts">
if (!import.meta.server && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register(
    import.meta.env.MODE === 'production' ? '/service-worker.js' : '/dev-sw.js?dev-sw',
  )
}
const likeStore = useLikeStore()
await likeStore.fetchLikes()
</script>

<template>
  <div class="app-container">
    <NuxtPage />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: #212529;
  box-sizing: border-box;
}
</style>