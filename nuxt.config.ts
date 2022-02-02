import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'Storybook',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'StoryBook'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  buildModules: ['nuxt-purgecss'],
  css: [

  ],
  ssr: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "primevue/resources/themes/lara-light-blue/theme.css"; @import "primevue/resources/primevue.css"; @import "primeicons/primeicons.css"; @import "primeflex/primeflex.scss"; @import "~/stories/assets-shared/scss/variables.module.scss"; @import "~/stories/assets-shared/scss/main.scss";`,
        },
      },
    },
  },
  //components: true,
  // components: [
  //   { path: '~/stories/', extensions: ['vue'] }
  // ],
})