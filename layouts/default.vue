<template>
  <div class="bg-page">
    <Header @search="fetchData($event)" />
    <div class="main-layout flex column">
      <Container>
        <q-infinite-scroll @load="onLoad" :offset="250">
          <NuxtPage :drinks="drinks" />
          <template v-slot:loading>
          {{ this.drinks.length + 1, this.pagination?.total }}
            <div class="row justify-center q-my-md">
              <q-spinner-dots v-show="showSpinner" color="primary" size="40px" />
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
import { type IDrink } from "@/models";

export default defineNuxtComponent({
  name: "default",
  data() {
    return {
      drinks: [] as PropType<IDrink[]>,
      pagination: {},
      showSpinner: true,
    };
  },

  computed: {
    page() {
        return this.pagination?.current_page !== this.pagination?.last_page ? this.pagination?.next_page_url : '/?page=1'
    }
  },

  methods: {
    async fetchData(filter?: any) {
      try {
        this.showSpinner = true
        const query = {};
        if (filter?.category) {
          query.category = filter.category;
        }
        if (filter?.name) {
          query.name = filter.name;
        }
        const { data, error } = await useFetchDrinks(
          `/drinks${this.page}&rowsPerPage=50`,
          {
            query,
          }
        );
        if (!filter) {
          return {
            drinks: toRaw(data.value.data),
            pagination: toRaw(data.value.meta),
          };
        }
        this.drinks = toRaw(data.value.data);
        this.pagination = toRaw(data.value.meta);
      } catch (error) {
        console.log(error);
      }
    },

    async onLoad(index: number, done: () => void) {
      if (this.drinks.length === this.pagination?.total) {
        this.showSpinner = false;
        return
      }
      setTimeout(async () => {
        const { drinks, pagination } = await this.fetchData();
        this.drinks.push(...drinks);
        this.pagination = pagination;
        done();
      }, 1000);
    },
  },

  async created() {
    const { drinks, pagination } = await this.fetchData();
    this.drinks.push(...drinks);
    this.pagination = pagination;
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