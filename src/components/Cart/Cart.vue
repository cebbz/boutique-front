<template>
    <div class="p-20">
        <h2 class="mb-10">Panier</h2>
        <CartProductList :cart="cart" @remove-product-from-cart="emit('remove-product-from-cart', $event)" />
    </div>
</template>

<script setup lang="ts">
import CartProductList from './CartProductList.vue';
import type { ProductInterface } from '@/interfaces/product.interface';
defineProps<{
    cart: ProductInterface[];
}>();

const emit = defineEmits<{
        (e: 'remove-product-from-cart', productId: number): void;
    }>();
</script>

<style lang="scss" scoped>
</style>
