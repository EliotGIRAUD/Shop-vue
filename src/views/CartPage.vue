<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<template>
    <div class="cart-page">
        <h1>Mon Panier</h1>
        
        <div v-if="cartStore.totalItems === 0" class="empty-cart">
            <p>Votre panier est vide</p>
            <router-link to="/" class="continue-shopping">Continuer mes achats</router-link>
        </div>

        <div v-else class="cart-content">
            <div class="cart-items">
                <div v-for="product in cartStore.items" :key="product.id" class="cart-item">
                    <img :src="product.image" :alt="product.title" class="product-image">
                    <div class="product-details">
                        <h3>{{ product.title }}</h3>
                        <p class="price">{{ product.price }} €</p>
                    </div>
                    <button @click="cartStore.removeItem(product.id)" class="remove-btn">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>

            <div class="cart-summary">
                <h2>Récapitulatif</h2>
                <div class="summary-item">
                    <span>Sous-total</span>
                    <span>{{ cartStore.totalPrice.toFixed(2) }} €</span>
                </div>
                <div class="summary-item">
                    <span>Livraison</span>
                    <span>Gratuite</span>
                </div>
                <div class="summary-item total">
                    <span>Total</span>
                    <span>{{ cartStore.totalPrice.toFixed(2) }} €</span>
                </div>
                <button class="checkout-btn">Procéder au paiement</button>
                <button @click="cartStore.clearCart()" class="clear-cart-btn">Vider le panier</button>
                <router-link to="/" class="continue-shopping">Continuer mes achats</router-link>

            </div>
        </div>
    </div>
</template>

<style scoped>
.cart-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.empty-cart {
    text-align: center;
    padding: 3rem;
}

.continue-shopping {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #00960a;
    color: white;
    text-decoration: none;
    border-radius: 4px;
}

.cart-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
}

.cart-items {
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
}

.cart-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    gap: 1rem;
}

.product-image {
    width: 100px;
    height: 100px;
    object-fit: contain;
}

.product-details {
    flex: 1;
}

.price {
    color: #00960a;
    font-weight: bold;
}

.remove-btn {
    background: none;
    border: none;
    color: #ff4444;
    cursor: pointer;
    padding: 0.5rem;
}

.cart-summary {
    background-color: white;
    border-radius: 8px;
    padding: 1.5rem;
    height: fit-content;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
}

.summary-item.total {
    font-weight: bold;
    font-size: 1.2rem;
    border-top: 1px solid #eee;
    padding-top: 1rem;
    margin-top: 1rem;
}

.checkout-btn {
    width: 100%;
    padding: 1rem;
    background-color: #00960a;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 1rem;
}

.checkout-btn:hover {
    background-color: #007a08;
}

.clear-cart-btn {
    width: 100%;
    padding: 1rem;
    background-color: #ff4444;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 1rem;
}

.clear-cart-btn:hover {
    background-color: #cc0000;
}
</style> 