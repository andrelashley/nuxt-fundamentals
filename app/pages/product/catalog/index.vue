<script setup lang="ts">
const products = await $fetch('/api/products')

definePageMeta({ layout: 'catalog' })
</script>

<template>
  <div>
    <div>
      <ul>
        <li v-for="product in products" :key="product.name">
          <div>{{ product.name }}</div>
          <div>{{ product.price }}</div>
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
