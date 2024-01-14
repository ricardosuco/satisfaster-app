<template>
  <NuxtLayout name="404">
    <section class="center">
        <span class="text-h4 text-bold text-secondary">Página não encontrada!</span>
        <img src="public/search-rafiki.svg" width="400px" />
      <q-btn  @click="goHome" class="q-px-xl" label="Voltar" color="primary" icon="arrow_back" size="lg" no-caps/>
    </section>
  </NuxtLayout>
</template>

<script lang="ts">
export default {
    name: 'ErrorPage',
    methods: {
        goHome() {
            this.$router.push('/');
        }
    }
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
</style>