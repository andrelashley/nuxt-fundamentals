<script setup lang="ts">
import { useCurrency } from '~/composables/useCurrency';


const products = await $fetch('/api/products')
const { currency } = useCurrency('en-US', 'USD')
definePageMeta({ layout: 'catalog' })
</script>

<template>
  <div>
    <div>
      <ul>
        <li v-for="product in products" :key="product.name">
          <div>{{ product.name }}</div>
          <div>{{ currency(product.price) }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  padding: 0;
}

li {
  padding: 20px;
}
</style>
