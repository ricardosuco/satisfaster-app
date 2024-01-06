<template>
  <div class="q-my-lg flex justify-center" style="gap: 20px">
    <!-- <DrinkCard v-for="i in 8" :key="i" /> -->
    <DrinkCard :drink="drink" v-for="drink in drinks" :key="drink.id" />
  </div>
</template>

<script lang="ts">
export interface IDrink {
  id: number;
  name: string;
  instructions: string;
  image: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export default defineNuxtComponent({
  name: "Index",
  props: {
    drinks: Array as PropType<IDrink[]>,
  },
});
</script>

<style lang="scss">
</style>