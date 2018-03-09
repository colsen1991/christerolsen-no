const isStatic = !!process.env.STATIC

module.exports = {
  css: [
    { src: './assets/style/index.scss', lang: 'sass' }
  ],
  loading: {
    color: '#23d160'
  },
  manifest: {
    name: 'Vindir: Web & IT og sånt',
    short_name: 'Vindir',
    display: 'standalone',
    description: 'Hjemmeside for bedriften Vindir (https://www.vindir.no). Et lite web- og IT-byrå i Bodø.',
    orientation: 'any',
    theme_color: '#fff',
    background_color: '#fff'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    [ '@nuxtjs/google-analytics', { ua: 'CHANGEME' } ]
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    extractCSS: true,
    vendor: []
  },
  plugins: [
    './plugins/components',
    './plugins/lazyload'
  ],
  head: {
    htmlAttrs: { lang: 'nb-NO' },
    titleTemplate: '%s - Vindir: Web & IT og sånt',
    script: [ { src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js', type: 'text/javascript', async: true } ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' },
    ],
    meta: [
      { hid: 'description', name: 'description', content: 'Hjemmeside for bedriften Vindir (https://www.vindir.no). Et lite web- og IT-byrå i Bodø.' },
      { name: 'theme-color', content: '#fff' },
      { hid: 'og:title', property: 'og:title', content: 'Vindir: Web & IT og sånt' },
      { hid: 'og:description', property: 'og:description', content: 'Hjemmeside for bedriften Vindir (https://www.vindir.no). Et lite web- og IT-byrå i Bodø.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.vindir.no/logo.png' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://www.vindir.no/logo.png' },
      { property: 'og:site_name', content: 'Vindir: Web & IT og sånt' },
      { name: 'robots', content: 'index, follow' }
    ]
  },
  generate: {
    routes: []
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.vindir.no',
    cacheTime: 1000 * 60 * 15,
    generate: isStatic,
    routes: [],
    exclude: [
      '/404'
    ]
  },
  workbox: {
    handleFetch: isStatic
  }
}
