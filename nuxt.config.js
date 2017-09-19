const isStatic = !!process.env.STATIC

const blogPosts = require('./static/data/blogg.json')

module.exports = {
  css: [
    { src: './assets/style/other.scss', lang: 'sass' },
    { src: './assets/style/global.scss', lang: 'sass' }
  ],
  loading: {
    color: '#23d160'
  },
  manifest: {
    name: 'Christer Olsen web & IT',
    short_name: 'CO web & IT',
    display: 'standalone',
    description: 'Nettside for Christer Olsen. En frilanser innen fagfeltet web & IT.',
    orientation: 'any',
    theme_color: '#3273dc'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    extractCSS: true,
    vendor: [
      'buefy',
      'whatwg-fetch'
    ]
  },
  plugins: [
    './plugins/buefy',
    './plugins/components'
  ],
  head: {
    htmlAttrs: { lang: 'no_NO' },
    titleTemplate: '%s - Christer Olsen web & IT',
    script: [ { src: 'https://use.fontawesome.com/992cf8b5f9.js', type: 'text/javascript', async: true } ],
    link: [
      { rel: 'favicon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' },
      { rel: 'me', href: 'https://www.christerolsen.me', type: 'text/html' }
    ],
    meta: [
      { name: 'title', content: 'Christer Olsen web & IT' },
      { name: 'description', content: 'Frilanser innen fagfeltet web & IT. Hjemmesider, konsulenttjenester og tekinisk hjelp.' },
      { name: 'theme-color', content: '#3273dc' },
      { property: 'og:title', content: 'Christer Olsen web & IT' },
      { property: 'og:description', content: 'Frilanser innen fagfeltet web & IT. Hjemmesider, konsulenttjenester og tekinisk hjelp.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.christerolsen.no/logo-full.png' },
      { property: 'og:locale', content: 'no_NO' },
      { property: 'og:site_name', content: 'Christer Olsen web & IT' },
      { name: 'robots', content: 'noindex' /* TODO Remove and edit static/robots.txt*/ }
    ]
  },
  generate: {
    async routes () {
      return [
        {
          route: '/blogg/',
          payload: blogPosts
        },
        ...blogPosts.map(({ slug }) => {
          return {
            route: `/blogg/${slug}`,
            payload: require(`./static/data/${slug}.json`)
          }
        })
      ]
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.christerolsen.no',
    cacheTime: 1000 * 60 * 15,
    generate: isStatic,
    routes: [
      ...blogPosts.map(blogPost => `/blogg/${blogPost.slug}`)
    ]
  }
}
