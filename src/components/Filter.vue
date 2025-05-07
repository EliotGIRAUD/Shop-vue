<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  categories: string[]
}>()

const emit = defineEmits<{
  (e: 'filter', category: string): void
}>()

const selectedCategory = ref('all')

const handleFilter = () => {
  emit('filter', selectedCategory.value)
}
</script>

<template>
  <div class="filter-container">
    <select 
      v-model="selectedCategory" 
      @change="handleFilter"
      class="filter-select"
    >
      <option value="all">Toutes les catégories</option>
      <option 
        v-for="category in categories" 
        :key="category" 
        :value="category"
      >
        {{ category.charAt(0).toUpperCase() + category.slice(1) }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.filter-container {
  margin: 1rem 0;
  padding: 0 1rem;
}

.filter-select {
  padding: 0.5rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background-color: white;
  font-size: 1rem;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 200px;
}

.filter-select:hover {
  border-color: #3b82f6;
}

.filter-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
</style>
