module.exports = {
  css: [
    { src: './assets/style/other.scss', lang: 'sass' },
    { src: './assets/style/global.scss', lang: 'sass' }
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
  ],
  head: {
    title: 'Christer Olsen',
    script: [ { src: 'https://use.fontawesome.com/992cf8b5f9.js', type: 'text/javascript', async: true } ]
  }
}
