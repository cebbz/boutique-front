<template>
    <div class="d-flex flex-row">
        <ShopFilters :filters="filters" @update-filter="emit('updateFilter', $event)" class="shop-filter" />
        <ShopProductList class="flex-fill" :products="products"
            @add-product-to-cart="emit('add-product-to-cart', $event)" />
    </div>
</template>

<script setup lang="ts">
import ShopProductList from './ShopProductList.vue';
import type { FiltersInterface, FilterUpdate, ProductInterface } from '@/interfaces';
import ShopFilters from './ShopFilters.vue';


defineProps<{
    products: ProductInterface[];
    filters: FiltersInterface;
}>()

const emit = defineEmits<{
    (e: 'add-product-to-cart', productId: number): void;
    (e: 'updateFilter', filters: FilterUpdate): void;
}>()
</script>

<style lang="scss" scoped>
.shop-filter {
    flex: 0 0 200px;
}
</style>
