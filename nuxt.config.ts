// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
  css: [
    '@/assets/style/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  components: {
    dirs: ['components/ui']
  },
  modules: [
    '@nuxtjs/style-resources',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/variables.scss";'
        },
      },
    },
  }
})