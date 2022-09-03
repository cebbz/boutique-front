<template>
    <div>
        <ShopProductList :products="products" />
    </div>
</template>

<script setup lang="ts">
import ShopProductList from './ShopProductList.vue';
import ShopProduct from './ShopProduct.vue';
import type { ProductInterface } from '@/interfaces/product.interface';

defineProps<{
    products: ProductInterface[];
}>()
</script>

<style lang="scss" scoped>
</style>
