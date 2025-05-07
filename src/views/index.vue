<script setup lang="ts">
import Card from '../components/Card.vue'
import Loading from '../components/Loading.vue'
import Filter from '../components/Filter.vue'
import Cart from '../components/Cart.vue'

import { ref, onBeforeMount, computed } from 'vue'

const loading = ref(false)
const products = ref([])
const selectedCategory = ref('all')

const categories = computed(() => {
  const uniqueCategories = new Set(products.value.map(product => product.category))
  return Array.from(uniqueCategories)
})

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products.value
  }
  return products.value.filter(product => product.category === selectedCategory.value)
})

onBeforeMount(() => {
  ShowProduct()
})

async function ShowProduct() {
  loading.value = true
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    const json = await res.json()
    products.value = json
  } catch (error) {
    console.error('Error fetching products:', error)
  } finally {
    loading.value = false
  }
}

const handleFilter = (category) => {
  selectedCategory.value = category
}
</script>

<template>
  <div class="home">
    <header class="header">
      <h1>Boutique</h1>
      <Cart />
    </header>

    <main>
      <Filter :categories="categories" @filter="handleFilter"/>
      
      <div v-if="loading">
        <Loading/>
      </div>

      <div v-else>
        <button @click="ShowProduct" class="refresh-btn">Actualiser</button>
        <div class="products-grid">
          <Card :products="filteredProducts"/>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.refresh-btn {
  background-color: #00960a;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}
</style>
