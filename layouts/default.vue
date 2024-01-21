<template>
  <div class="bg-page">
    <Header @search="handleSearch($event)" />
    <div class="main-layout flex column">
      <Container>
        <div class="q-mt-md flex justify-center">
          <q-chip class="text-weight-bold q-pa-md" icon="local_bar" text-color="white" color="secondary">{{ filter.category ? filter.category : 'Todos' }}</q-chip>
        </div>
        <q-infinite-scroll @load="onLoad" :offset="250">
          <NuxtPage :drinks="drinks" :noDrinks="noDrinks" />
          <template v-slot:loading>
            <div class="row justify-center q-my-md">
              <q-spinner-dots
                v-show="showSpinner"
                color="primary"
                size="40px"
              />
            </div>
          </template>
        </q-infinite-scroll>
      </Container>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from "nuxt/app";
import { type IDrink, type Filter } from "@/models";

export default defineNuxtComponent({
  name: "default",
  data() {
    return {
      drinks: [] as PropType<IDrink[]>,
      pagination: {
        current_page: 0,
        last_page: null,
        next_page_url: null,
        previous_page_url: null,
        total: null,
      },
      filter: {} as Filter,
      showSpinner: true,
      noDrinks: false,
    };
  },

  computed: {
    page() {
      if (!this.pagination.previous_page_url && !this.pagination.next_page_url)
        return `/?page=1`;
      else return `/?page=${this.pagination?.current_page + 1}`;
    },
  },

  methods: {
    async fetchData() {
      try {
        this.showSpinner = true;
        const query = {};
        if (this.filter?.name) query.name = this.filter.name;
        if (this.filter?.category) query.category = this.filter.category;
        const { data, error } = await useFetchDrinks(
          `/drinks${this.page}&rowsPerPage=50`,
          { query }
        );
        this.drinks.push(...toRaw(data.value.data));
        this.pagination = toRaw(data.value.meta);
      } catch (error) {
        console.error(error);
      } finally {
        this.showSpinner = false;
        this.drinks.length ? (this.noDrinks = false) : (this.noDrinks = true);
      }
    },

    resetPagination() {
      this.pagination.total = null;
      this.pagination.current_page = 0;
      this.pagination.previous_page_url = null;
      this.pagination.next_page_url = null;
    },

    async handleSearch(filter: Filter) {
      this.filter = filter;
      this.drinks = [];
      this.resetPagination();
      await this.fetchData();
    },

    async onLoad(index: number, done: () => void) {
      if (this.drinks.length === this.pagination.total) return done();
      await this.fetchData();
      done();
    },
  },
});
</script>

<style lang="scss" scoped>
.main-layout {
  padding: 0 3rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bg-page {
  background-color: #f3f9fe;
}
</style>