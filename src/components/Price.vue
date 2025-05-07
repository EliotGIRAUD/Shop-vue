<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  price: number
}>()

const displayPrice = computed(() => {
  return props.price.toFixed(2).replace('.', ',') + ' €'
})
</script>

<template>
  <span class="price">{{ displayPrice }}</span>
</template>

<style scoped>
.price {
  font-weight: bold;
  color: #00960a;
  font-size: 1.1rem;
}
</style>
