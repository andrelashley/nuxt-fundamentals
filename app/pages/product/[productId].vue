<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <div>
    Product Page for: {{ route.params.productId }}
  </div>
</template>

<style scoped></style>
