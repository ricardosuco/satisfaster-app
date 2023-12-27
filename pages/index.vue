<template>
    <div class="q-my-lg flex justify-center" style="gap: 20px">
      <DrinkCard v-for="i in 15" :key="i" />
    </div>
</template>

<script lang="ts">
export default {
  name: "Index",

  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>