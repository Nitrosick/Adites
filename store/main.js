export const useMainStore = defineStore('main', {
  state: () => ({
    language: 'hr'
  }),

  actions: {
    changeLanguage (ln) {
      if (!['en', 'de', 'hr'].includes(ln)) return
      this.language = ln
      localStorage.setItem('language', ln)
    }
  },
})
