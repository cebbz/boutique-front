<script setup lang="ts">
import type { Category, FiltersInterface, FilterUpdate } from '@/interfaces';

defineProps<{
    filters: FiltersInterface;
}>()

const emit = defineEmits<{
    (e: 'updateFilter', filterUpdate: FilterUpdate): void;
}>()
</script>



<template>
    <div class="p-20 d-flex flex-column">

        <!-- Recherche par nom -->
        <section class="mb-20">
            <h3 class=mb-10>Rechercher</h3>
            <input :value="filters.search" @input="emit('updateFilter', {
                search: ($event.target as HTMLInputElement).value
            })" type="text" placeholder="Rechercher">
        </section>

        <!-- Recherche par prix -->
        <section class="mb-20">
            <h3 class=mb-10>Trier par prix</h3>
            <div class="mb-5"
                v-for="priceRange of ([[0, 10000], [800, 1000], [1000, 1500], [1500, 2000], [2000, 10000]] as [number, number][])">
                <input :checked="filters.priceRange[0] === priceRange[0]" type="radio" @input="emit('updateFilter', {
                    priceRange
                })" name="priceRange" :id="priceRange[0] + ''">
                <label :for="priceRange[0] + ''">{{
                        priceRange[0] === 0 ? 'Tous les prix' : priceRange[0] === 2000 ? 'Plus de 2000€' : priceRange[0] +
                            '€ - ' + priceRange[1] + '€'
                }}</label>
            </div>
        </section>

        <section class="mb-20 flex-fill">
            <h3 class=mb-10>Trier par Catégorie</h3>
            <div class="mb-5">
                <p class="category" :class="{ selected: filters.category === category }"
                    v-for="category in (['all', 'desktop', 'gamer', 'streaming'] as Category[])"
                    @click="emit('updateFilter', { category })"> {{
                            category
                    }}</p>
            </div>
        </section>
        <button class="btn btn-danger" @click="emit('updateFilter', {})">Supprimer les filtres</button>
    </div>
</template>


<style lang="scss" scoped>
.category {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 5px;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #ccc;
    }

    &.selected {
        background-color: #ccc;
    }
}
</style>