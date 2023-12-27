<template>
  <q-card class="drink-card border-radius" bordered flat>
    <img src="https://www.thecocktaildb.com/images/ingredients/gin-Small.png" />
    <q-card-section class="flex column items-center">
      <div>
        <p class="text-bold text-primary">Drink</p>
      </div>
    </q-card-section>
      <q-separator />
      <q-card-actions vertical>
        <q-btn  label="Visualizar detalhes" text-color="accent" no-caps outline flat />
      </q-card-actions>
  </q-card>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.drink-card {
  width: 220px;
}
</style>