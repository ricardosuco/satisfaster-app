import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import { resolve } from 'path';

const r = (p: string) => resolve(__dirname, p);

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
  ],

  resolve: {
    alias: {
      src: "/src",
      "~~": r("."),
      "~~/": r("./"),
      "@@": r("."),
      "@@/": r("./"),
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
  },
});
