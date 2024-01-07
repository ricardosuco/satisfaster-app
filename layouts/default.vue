<template>
  <div class="bg-page">
    <Header @search="handleSearch($event)" />
    <div class="main-layout flex column">
      <Container>
        <NuxtPage :drinks="drinks" />
      </Container>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineNuxtComponent } from "nuxt/app";
const { drinks, pagination } = await useDrinksFetch();
defineNuxtComponent({
  name: "default",
  
});
</script>

<style lang="scss" scoped>
.main-layout {
  padding: 0 3rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bg-page {
  background-color: #f3f9fe;
}
</style>