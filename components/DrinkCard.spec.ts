import { mount } from "@vue/test-utils";
import DrinkCard from "./DrinkCard.vue";
import { describe, it, expect } from "vitest";
import { Quasar } from "quasar";

describe("DrinkCard", () => {
  const drinkCardMount = (options?) => {
    const wrapper = mount(DrinkCard, {
      global: {
        plugins: [Quasar],
      },
      props: {
        drink: {
          id: 1,
          name: "Coca Cola",
          instructions: "Mix it all together",
          image:
            "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
          category: "Ordinary Drink",
        },
      },
    });
    return wrapper;
  };
  it("should mount the component", async () => {
    const wrapper = drinkCardMount();
    expect(wrapper.vm).toBeDefined();
  });
});
