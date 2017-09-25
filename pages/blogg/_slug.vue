<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <article>
    <hero-section :title="res.title">
      <blog-post-top :blogPost="res" :link="false"/>
      <br>
      <div class="content is-medium" v-html="res.content"/>
    </hero-section>

    <section class="container level is-mobile">
      <span class="level-item">
        <a v-clipboard:copy="url" v-clipboard:success="onCopy">
          <b-icon class="icon is-primary" icon="share" slot="trigger"/>
        </a>
      </span>

      <span class="level-item">
        <a :href="`https://twitter.com/home?status=${urlEncoded}`" target="noopener" rel="nofollow">
          <b-icon class="icon" icon="twitter"/>
        </a>
      </span>

      <span class="level-item">
        <a :href="`https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}`" target="noopener" rel="nofollow">
          <b-icon class="icon" icon="facebook"/>
        </a>
      </span>

      <span class="level-item">
        <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${urlEncoded}&title=${titleEncoded}`" target="noopener" rel="nofollow">
          <b-icon class="icon" icon="linkedin"/>
        </a>
      </span>
    </section>

    <section class="container section">
      <disqus shortname="christerolsen-no" :identifier="res.slug" :url="`https://www.christerolsen.no/blogg/${this.res.slug}`"/>
    </section>
  </article>
</template>

<script>
  import createGetData from '../../utils/data'
  import VueDisqus from 'vue-disqus/VueDisqus.vue'

  export default {
    components: {
      disqus: VueDisqus
    },
    computed: {
      url () {
        return `https://www.christerolsen.no/blogg/${this.res.slug}`
      },
      urlEncoded () {
        return encodeURIComponent(`https://www.christerolsen.no/blogg/${this.res.slug}`)
      },
      titleEncoded () {
        return encodeURIComponent(this.res.title)
      }
    },
    methods: {
      onCopy () {
        this.$toast.open('URL kopiert til utklippstavle!')
      }
    },
    head () {
      return {
        title: `${this.res.title} - Blogg`,
        link: [ { rel: 'canonical', href: `https://www.christerolsen.no/blogg/${this.res.slug}` } ],
        meta: [
          { name: 'title', content: `${this.res.title} - Blogg - Christer Olsen Web & IT` },
          { property: 'og:title', content: `${this.res.title} - Blogg - Christer Olsen Web & IT` },
          { property: 'og:description', content: this.res.excerpt },
          { property: 'og:image', content: this.res.image.url },
          { property: 'og:type', content: 'article' }
        ]
      }
    },
    asyncData: createGetData()
  }
</script>
