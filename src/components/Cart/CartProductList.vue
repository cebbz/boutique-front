<template>
    <div class="d-flex flex-column">
        <CartProduct v-for="product of cart" :product="product"
            @remove-product-from-cart="emit('remove-product-from-cart', $event)" />
    </div>
</template>

<script setup lang="ts">
import CartProduct from './CartProduct.vue';
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
