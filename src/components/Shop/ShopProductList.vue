<template>
    <div class="grid p-20">
        <ShopProduct v-for="product of products" :product="product"
            @add-product-to-cart="emit('add-product-to-cart', $event)" />
    </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from '@/interfaces';
import ShopProduct from './ShopProduct.vue';

defineProps<{
    products: ProductInterface[];
}>()
const emit = defineEmits<{
    (e: 'add-product-to-cart', productId: number): void;
}>()
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 350px;
    gap: 20px;
}
</style>
