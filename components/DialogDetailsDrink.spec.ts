import { mount } from "@vue/test-utils";
import DialogDetailsDrink from "./DialogDetailsDrink.vue";
import { describe, expect, it } from "vitest";
import { Quasar } from "quasar";

describe("DialogDetailsDrink", () => {
  it("should mount the component", async () => {
    const wrapper = mount(DialogDetailsDrink, {
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
    expect(wrapper.vm).toBeDefined();
  });
});
