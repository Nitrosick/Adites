export const useMainStore = defineStore('main', {
  state: () => ({
    language: 'de'
  }),

  actions: {
    changeLanguage (ln) {
      if (!['en', 'de'].includes(ln)) return
      this.language = ln
      localStorage.setItem('language', ln)
    }
  },
})
