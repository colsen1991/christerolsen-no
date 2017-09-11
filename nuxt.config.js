module.exports = {
  css: [
    { src: './assets/style/global.scss', lang: 'sass' },
    { src: './assets/style/buefy-overrides.scss', lang: 'sass' },
    { src: './assets/style/fa.scss', lang: 'sass' }
  ],
  loading: {
    color: '#3B8070'
  },
  manifest: {
    theme_color: '#3B8070'
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  build: {
    extractCSS: true,
    vendor: [
      'buefy'
    ]
  },
  plugins: [
    './plugins/buefy'
  ]
}
