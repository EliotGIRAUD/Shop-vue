<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<template>
    <div class="cart-container">
        <router-link to="/cart" class="cursor-pointer">
            <div class="cart-icon">
                <span class="material-symbols-outlined">
                    shopping_cart
                </span>
                <span v-if="cartStore.totalItems > 0" class="cart-count">{{ cartStore.totalItems }}</span>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.cart-container {
    position: relative;
}

.cart-icon {
    cursor: pointer;
    padding: 10px;
    position: relative;
}

.cart-count {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #ff4444;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
}
</style>