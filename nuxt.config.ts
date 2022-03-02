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
  ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/src/assets/library/primeflex.min.css"; @import "~/src/assets/themes/white-paper/_theme.scss"; @import "primevue/resources/primevue.min.css"; @import "primeicons/primeicons.css";`,
        },
      },
    },
  },
  // components: true,
  // components: [
  //   { path: '~/v2.src.components/', extensions: ['vue'] }
  // ],
})