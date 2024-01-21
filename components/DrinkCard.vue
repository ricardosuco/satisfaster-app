<template>
  <q-card class="drink-card border-radius" bordered flat>
    <q-card-section style="height: 66%">
      <q-img v-if="drink.image" :src="drink.image" />
      <q-img v-else src="/placeholderdrink.png" />
    </q-card-section>
    <q-card-section class="flex column items-center">
      <div class="flex column items-center">
        <span class="text-bold text-primary">{{ drink?.name }}</span>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-actions align="right">
      <q-btn
        @click="showDrink(drink)"
        class="text-bold"
        label="Visualizar detalhes"
        text-color="accent"
        no-caps
        flat
      />
      <q-btn
        @click="handleFavorite(drink)"
        :icon="isFavorite(drink?.id) ? 'favorite' : 'favorite_outline'"
        color="secondary"
        round
        flat
      >
        <q-tooltip>{{
          isFavorite(drink?.id)
            ? "Remover dos favoritos"
            : "Adicionar aos favoritos"
        }}</q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
  <q-dialog v-model="showDialog">
    <DialogDetailsDrink :drink="currentDrink" />
  </q-dialog>
</template>

<script lang="ts">
import { type IDrink } from "../models";
import { uid } from "quasar";
import DialogDetailsDrink from "./DialogDetailsDrink.vue";
export default {
  name: "DrinkCard",
  components: {
    DialogDetailsDrink,
  },
  props: {
    drink: Object as PropType<IDrink>,
  },
  data() {
    return {
      showDialog: false,
      currentDrink: {} as IDrink | undefined,
      favoritesDrinks: [],
    };
  },
  methods: {
    uid,
    showDrink(drink: IDrink | undefined) {
      this.currentDrink = drink;
      this.showDialog = true;
    },

    async handleFavorite(drink: IDrink) {
      if (this.$q.localStorage.has("user")) {
        const user = this.$q.localStorage.getItem("user");
        if (user?.favorites.includes(drink.id)) {
          user.favorites = user.favorites.filter((id) => id !== drink.id);
          this.favoritesDrinks = user.favorites;
          this.$q.localStorage.set("user", user);
        } else {
          user?.favorites.push(drink.id);
          this.favoritesDrinks.push(drink.id);
          this.$q.localStorage.set("user", user);
        }
      }
    },

    isFavorite(id: number): boolean {
      return this.favoritesDrinks.includes(id);
    },

    createLocalUser() {
      if (!this.$q.localStorage.getItem("user")) {
        this.$q.localStorage.set("user", {
          id: this.uid(),
          favorites: [],
        });
      }
    },
  },

  async created() {
    await this.createLocalUser();
    this.favoritesDrinks = this.$q.localStorage.getItem("user")?.favorites;
  },
};
</script>

<style scoped>
.drink-card {
  width: 220px;
}
</style>