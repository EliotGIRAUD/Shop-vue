<script setup lang="ts">
import Price from './Price.vue'
import Rating from './Rating.vue'
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart'

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
})

const cartStore = useCartStore()

const rating = ref(0)
const price = ref(0)
const cart = ref([])

const emit = defineEmits<{
  (e: 'addToCart', product: any): void
}>()

const addToCart = (product) => {
    cartStore.addItem(product)
}

</script>

<template>
  <div v-for="product in products" :key="product.id">
    <div class="border border-gray-200 rounded-lg overflow-hidden w-[400px] h-[550px] m-4 shadow-md">
      <img :src="product.image" :alt="product.title" class="w-full h-[300px] object-contain">
      <div class="p-4 h-[250px] flex flex-col">
        <h2 class="text-xl font-bold mb-2 h-[56px] line-clamp-2">{{ product.title }}</h2>
        <p class="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">{{ product.description }}</p>
        <div class="flex justify-between items-center mb-2">
          <Price :price="product.price" />
          <span class="px-2 py-1 rounded text-sm">{{ product.category }}</span>
        </div>
        <div class="flex items-center gap-2">
          <Rating :rating="product.rating.rate" />
          <span class="text-sm text-gray-500">({{ product.rating.count }} avis)</span>
        </div>
      </div>
    </div>
    <button class="bg-blue-500 text-white px-4 py-2 rounded-md" @click="addToCart(product)">Ajouter au panier</button>
  </div>
</template>

<style scoped>
</style>

