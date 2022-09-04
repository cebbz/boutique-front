<template>
    <div>
        <ShopProductList :products="products" @add-product-to-cart="emit('add-product-to-cart', $event)" />
    </div>
</template>

<script setup lang="ts">
import ShopProductList from './ShopProductList.vue';
import type { ProductInterface } from '@/interfaces';

defineProps<{
    products: ProductInterface[];
}>()

const emit = defineEmits<{
    (e: 'add-product-to-cart', productId: number): void;
}>()
</script>

<style lang="scss" scoped>
</style>
