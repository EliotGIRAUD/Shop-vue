

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Chargement...'
  }
})
</script>

<template>
  <div class="loading-container">
    <span class="material-symbols-outlined animate-spin">
      progress_activity
    </span>
    <p class="loading-text">Chargement...</p>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
}

.loading-text {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.animate-spin {
  animation: spin 1s linear infinite;
  font-size: 10rem;
  color: #3b82f6;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
