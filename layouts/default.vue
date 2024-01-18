<template>
  <div class="bg-page">
    <Header @search="handleSearch($event)" />
    <div class="main-layout flex column">
      <Container>
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
        {{ pagination.total }}
        {{ drinks.length }}
        {{ showSpinner }}
      </Container>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from "nuxt/app";
import { type IDrink } from "@/models";

export default defineNuxtComponent({
  name: "default",
  data() {
    return {
      drinks: [] as PropType<IDrink[]>,
      pagination: {
        current_page: null,
        last_page: null,
        next_page_url: "/?page=1",
        total: 0,
      },
      filter: {},
      showSpinner: true,
      noDrinks: false,
    };
  },

  computed: {
    page() {
      // return this.pagination?.total !== this.drinks.length
      //   ? `/?page=${this.pagination?.current_page + 1}`
      //   : `/?page=${this.pagination?.current_page}`;

      if (!this.pagination.current_page && !this.pagination.last_page)
      return '/?page=1'
      else if (this.pagination?.total !== this.drinks.length) 
      return `/?page=${this.pagination?.current_page + 1}`
      else return `/?page=${this.pagination?.current_page}`
    },
  },

  methods: {
    async fetchData(resetPagination = false) {
      try {
        this.showSpinner = true;
        const query = {};
        if (this.filter?.category) query.category = this.filter.category;
        if (this.filter?.name) query.name = this.filter.name;
        if (resetPagination) {
          this.drinks.length = 0
          this.pagination.total = 0
          this.pagination.current_page = null
          this.pagination.last_page = null
          this.pagination.next_page_url = "/?page=1"
        }
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
        this.drinks.length ? this.noDrinks = false : this.noDrinks = true
      }
    },

    async handleSearch(filter: any) {
      this.filter = filter;
      this.drinks = [];
      await this.fetchData(true);
    },

    async onLoad(index: number, done: () => void) {
      console.log(this.pagination?.next_page_url)
      if (!this.pagination?.next_page_url) return;
      if (this.filter?.name || this.filter?.category) await this.fetchData(true);
      else await this.fetchData();
      done();
    },
  },

  async created() {
    await this.fetchData();
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