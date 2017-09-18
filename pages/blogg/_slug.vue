<template>
  <article>
    <hero-section :title="res.title" type="info"/>
    <hero-section>
      <blog-post-top :blogPost="res" :link="false"/>
      <br>
      <div class="content is-medium" v-html="res.content"/>
    </hero-section>
  </article>
</template>

<script>
  import createGetData from '../../utils/data'

  export default {
    head () {
      return {
        title: `${this.res.title} - Blogg`,
        link: [ { rel: 'canonical', href: `https://www.christerolsen.no/blogg/${this.res.slug}` } ],
        meta: [
          { name: 'title', content: `${this.res.title} - Blogg - Christer Olsen web & IT` },
          { property: 'og:title', content: `${this.res.title} - Blogg - Christer Olsen web & IT` },
          { property: 'og:description', content: this.res.excerpt },
          { property: 'og:image', content: this.res.image.url },
          { property: 'og:type', content: 'article' }
        ]
      }
    },
    asyncData: createGetData()
  }
</script>
