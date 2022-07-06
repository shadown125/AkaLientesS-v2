import VueObserveVisibility from 'vue3-observe-visibility'
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueObserveVisibility)
})
