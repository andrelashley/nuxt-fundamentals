<script setup lang="ts"></script>

<template>
  <div class="header">
    <div><NuxtLink to="/">Home</NuxtLink></div>
    <div><NuxtLink to="/product/catalog">Catalog</NuxtLink></div>
  </div>
</template>

<style scoped>

.header {
  display: flex;
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
}

.header>div {
  margin-right: 10px;
}

a, a:visited {
  text-decoration: none;
  color: #72A0C1;
}

a:hover {
  cursor: pointer;
  color: #002D62;
}

</style>
