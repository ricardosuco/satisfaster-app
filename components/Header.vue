<template>
  <div class="row flex items-center justify-between header bg-primary">
    <div class="col-xs-12 col-sm-2 col-md-auto">
      <span class="text-white">Satisfaster</span>
    </div>
    <div class="col-xs-12 col-md-4">
      <q-input
        class="bg-white"
        color="primary"
        v-model="drinkName"
        debounce="500"
        clearable
        dense
        square
        outlined
      >
        <template v-slot:append>
          <q-btn icon="search" flat />
        </template>
      </q-input>
    </div>
    <div class="col-xs-12 col-md-auto">
      <q-btn
        class="text-bold"
        label="Drinks favoritos"
        icon-right="favorite"
        no-caps
        color="secondary"
        unlevated
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      drinkName: "",
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