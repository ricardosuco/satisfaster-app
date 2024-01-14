<template>
  <div class="q-my-lg flex justify-center" style="gap: 20px">
      <DrinkCard :drink="drink" v-for="drink in drinks" :key="drink.id" />
    </div>
</template>

<script lang="ts">
import { type IDrink } from "@/models";
export default defineNuxtComponent({
  name: "Index",
  props: {
    drinks: Array as PropType<IDrink[]>,
  },
});
</script>

<style lang="scss">
</style>