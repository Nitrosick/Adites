const title = 'Adites'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      projectTitle: title
    }
  },
  app: {
    head: {
      title: title,
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      noscript: [{ children: 'JavaScript is required' }]
    }
  },
  components: {
    dirs: [
      'components/ui',
      'components/field'
    ]
  },
  modules: [
    '@nuxtjs/style-resources',
    '@pinia/nuxt'
  ],
  router: {
    options: {
      linkActiveClass: 'active-link',
      linkExactActiveClass: 'exact-active-link'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/variables.scss";'
        },
      },
    },
  },
  css: [
    '@/assets/style/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  imports: {
    dirs: ['store']
  }
})
