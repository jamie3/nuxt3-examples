// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@formkit/nuxt"],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
});
