<template>
  <div v-if="!noDrinks" class="q-my-lg flex justify-center" style="gap: 20px">
    <DrinkCard :drink="drink" v-for="drink in drinks" :key="drink.id" />
  </div>
  <div v-else data-testid="no-drinks">
    <div class="flex justify-center q-mt-lg">
      <q-icon name="sentiment_very_dissatisfied" size="100px" color="primary" />
    </div>
    <div  class="text-center text-h5 text-bold text-primary">Nenhum drink encontrado</div>
  </div>
</template>

<script lang="ts">
import { type IDrink } from "../models";
import DrinkCard from "../components/DrinkCard.vue";
export default {
  name: "Index",
  components: {
    DrinkCard,
  },
  props: {
    drinks: Array as PropType<IDrink[]>,
    noDrinks: Boolean,
  },
}
</script>

<style lang="scss">
</style>