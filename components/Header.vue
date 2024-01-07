<template>
  <div class="row flex items-center justify-between header bg-primary">
    <div class="col-xs-12 col-sm-2 col-md-auto">
      <span class="text-white">Satisfaster</span>
    </div>
    <div class="col-xs-12 col-md-4">
      <q-input
        class="bg-white"
        color="primary"
        @keydown.enter="$emit('handleSearch', drinkName)"
        v-model="drinkName"
        debounce="500"
        clearable
        dense
        square
        outlined
      >
        <template v-slot:append>
          <q-btn @click="$emit('handleSearch', drinkName)" icon="search" flat />
        </template>
      </q-input>
    </div>
    <div class="col-xs-12 col-md-auto">
      <q-btn-dropdown
        class="text-bold"
        label="Categorias"
        color="secondary"
        unlevated
        no-caps
      >
        <q-list>
          <q-item
            v-for="(category, index) in categories"
            :key="index"
            @click="$emit('handleSearch', category)"
            clickable
            v-close-popup
          >
            <q-item-section>
              <q-item-label>{{ category }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      drinkName: "",
      categories: [
        "Ordinary Drink",
        "Cocktail",
        "Milk / Float / Shake",
        "Other/Unknown",
        "Cocoa",
        "Shot",
        "Coffee / Tea",
        "Homemade Liqueur",
        "Punch / Party Drink",
        "Beer",
        "Soft Drink / Soda",
      ] as string[],
    };
  },
});
</script>

<style scoped>
.header {
  font-size: 42px;
  height: 100px;
  padding: 0 3rem;
}
</style>