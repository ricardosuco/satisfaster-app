<template>
  <div
    class="row flex items-center header bg-primary"
    :class="$q.screen.gt.sm ? 'justify-between' : 'justify-center'"
  >
    <div class="col-xs-auto col-md-auto">
      <span class="text-white">Satisfaster</span>
    </div>
    <div class="row q-col-gutter-md flex items-center col-xs-12 col-md-4">
      <div class="col-xs-11 col-md-10">
        <q-input
          class="bg-white"
          color="primary"
          @keydown.enter="$emit('search', filter)"
          v-model.trim="filter.name"
          placeholder="Busque por um drink"
          debounce="50"
          clearable
          dense
          square
          outlined
        >
          <template v-slot:append>
            <q-btn @click="$emit('search', filter)" icon="search" flat />
          </template>
        </q-input>
      </div>
      <div class="col-xs-1 col-md-5" v-if="$q.screen.lt.md">
        <q-btn-dropdown color="white" dropdown-icon="menu" size="18px" outline>
          <q-tooltip>Categorias</q-tooltip>
          <q-list>
          <q-item
            v-for="(category, index) in categories"
            :key="index"
            @click="$emit('search', { ...filter, category })"
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
    <div v-if="$q.screen.gt.sm" class="col-xs-12 col-md-auto">
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
            @click="$emit('search', { ...filter, category })"
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
      filter: {
        name: "",
        category: "",
      },
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
      ],
    };
  },
});
</script>

<style scoped>
.header {
  font-size: 42px;
  height: 140px;
  padding: 0 3rem;
}
</style>