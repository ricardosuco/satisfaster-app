<template>
  <q-card class="drink-card border-radius" bordered flat>
    <img :src="drink?.image" />
    <q-card-section class="flex column items-center">
      <div class="flex column items-center">
        <span class="text-bold text-primary">{{drink?.name}}</span>
        <span class="text-caption">{{ drink?.category }}</span>
      </div>
    </q-card-section>
      <q-separator />
      <q-card-actions vertical>
        <q-btn class="text-bold" label="Visualizar detalhes" text-color="accent" no-caps flat  />
      </q-card-actions>
  </q-card>
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
export default {
  name: 'DrinkCard',
  props: {
    drink: Object as PropType<IDrink>,
  }
};
</script>

<style scoped>
.drink-card {
  width: 220px;
}
</style>