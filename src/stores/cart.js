import { defineStore } from 'pinia'

// Fonction pour récupérer le panier du localStorage
const getStoredCart = () => {
  const storedCart = localStorage.getItem('cart')
  return storedCart ? JSON.parse(storedCart) : []
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: getStoredCart()
  }),
  
  getters: {
    totalItems: (state) => state.items.length,
    totalPrice: (state) => state.items.reduce((total, item) => total + item.price, 0)
  },
  
  actions: {
    addItem(product) {
      this.items.push(product)
      this.saveToLocalStorage()
    },
    
    removeItem(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.items.splice(index, 1)
        this.saveToLocalStorage()
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    },

    clearCart() {
      this.items = []
      localStorage.removeItem('cart')
    }
  }
}) 