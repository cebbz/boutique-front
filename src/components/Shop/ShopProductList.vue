<template>
    <div class="grid p-20">
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
    </div>
</template>

<script setup lang="ts">
import ShopProduct from './ShopProduct.vue';
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 350px;
    gap: 20px;
}
</style>
