import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  
  getters: {
    totalItems: (state) => state.items.length,
    totalPrice: (state) => state.items.reduce((total, item) => total + item.price, 0)
  },
  
  actions: {
    addItem(product) {
      this.items.push(product)
    },
    
    removeItem(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    }
  }
}) 