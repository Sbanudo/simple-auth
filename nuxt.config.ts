// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'about',
        path: '/about',
        component: resolve(__dirname, 'pages/about.vue')
      })
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/components/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

