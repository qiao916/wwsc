<script setup>

import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
</script>

<template>
<!--  二级裸游出口-->
  <LayoutFixed></LayoutFixed>
  <LayoutNav/>
  <LayoutHeader/>
  <RouterView/>
  <LayoutFooter/>
<!--  <router-view/>-->
</template>

<style scoped>

</style>