<script setup lang="ts">
const getStarClass = (position: number) => {
  const fullStar = position <= Math.floor(props.rating)
  const halfStar = position - 0.5 <= props.rating && position > Math.floor(props.rating)
  return {
    'filled': fullStar,
    'half-filled': halfStar
  }
}

const getStarSymbol = (position: number) => {
  const fullStar = position <= Math.floor(props.rating)
  const halfStar = position - 0.5 <= props.rating && position > Math.floor(props.rating)
  return fullStar ? '⭐' : halfStar ? '⭐' : '☆'
}

const props = defineProps<{
  rating: number
}>()
</script>

<template>
  <div class="rating-container">
    <div class="stars">
      <span v-for="n in 5" :key="n" class="star" :class="getStarClass(n)">
        {{ getStarSymbol(n) }}
      </span>
    </div>
    <span class="rating-text">{{ rating.toFixed(1) }}/5</span>
  </div>
</template>

<style scoped>
.rating-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  display: flex;
  gap: 0.2rem;
}

.star {
  font-size: 1.2rem;
  color: #e2e8f0;
  transition: all 0.2s ease;
}

.star.filled {
  color: #fbbf24;
  transform: scale(1.1);
}

.star.half-filled {
  color: #fbbf24;
  opacity: 0.5;
}

.rating-text {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}
</style> 