<script setup>



import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeLeftCategory from "@/views/Home/components/HomeLeftCategory.vue";
import HomeNewProduct from "@/views/Home/components/HomeNewProduct.vue";
import HomeHotProduct from "@/views/Home/components/HomeHotProduct.vue";
import HomeProductList from "@/views/Home/components/HomeProductList.vue";
</script>

<template>
<!--我是home-->
  <div class="container">
    <HomeLeftCategory />
    <HomeBanner />
  </div>
  <HomeNewProduct/>
  <HomeHotProduct/>
  <HomeProductList/>

</template>

<style scoped>

</style>