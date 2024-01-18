<template>
  <q-card class="text-justify">
    <q-btn icon="close" color="black" flat round v-close-popup style="z-index: 999; top: 3px; right: 3px; opacity: 0.5;" class="absolute-top-right bg-teal-3" />
    <div class="q-pa-md">
      <q-img :src="drink?.image" width="350px" />

      <div class="text-white text-weight-bold flex items-center column"></div>

      <q-card-section style="max-width: 350px">
        <div class="flex column items-center">
          <span class="text-h5 text-bold text-primary">{{ drink?.name }}</span>
          <span class="text-bold">{{ drink?.category }}</span>
        </div>
        <div>{{ drink?.instructions }}</div>
      </q-card-section>
    </div>
  </q-card>
</template>

<script lang="ts">
import { type IDrink } from "../models";
export default {
  name: "DialogDetailsDrink",
  props: {
    drink: Object as PropType<IDrink>,
  },
  data() {
    return {};
  },
}
</script>

<style scoped>
</style>