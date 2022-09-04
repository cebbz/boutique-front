<template>
    <div class="product mb-10 d-flex flex-row align-items-center product p-10">
        <strong class="flex-fill mr-10">{{ product.title }}</strong>
        <span class="mr-10">Prix: {{product.price}}€</span>
        <button class="btn btn-danger" @click="emit('remove-product-from-cart', product.id)">Supprimer</button>
    </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/product.interface';

    defineProps<{
        product: ProductInterface;
    }>();

    const emit = defineEmits<{
        (e: 'remove-product-from-cart', productId: number): void;
    }>();
</script>

<style lang="scss" scoped>
.product {
    border: var(--border);
    border-radius: var(--border-radius);
    background-color: var(--gray-1);
}
</style>
