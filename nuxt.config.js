const isStatic = !!process.env.STATIC

const blogPosts = require('./static/data/blogg.json')

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
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  build: {
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
    title: 'Christer Olsen',
    script: [ { src: 'https://use.fontawesome.com/992cf8b5f9.js', type: 'text/javascript', async: true } ]
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
