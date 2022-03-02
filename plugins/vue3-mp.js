import { defineNuxtPlugin } from "#app"
import { Vue3Mq } from "vue3-mq"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Vue3Mq, {
        breakpoints: { // default breakpoints - customize this
            xs: 375,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1366,
            xxxl: 1920,
            max: Infinity
        },
        defaultBreakpoint: "sm",
    })
})