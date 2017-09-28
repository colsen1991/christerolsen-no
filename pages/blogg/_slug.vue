<template>
  <article class="content is-medium">
    <header class="container section">
      <blog-post-top :blogPost="res" :link="false"/>
    </header>

    <section class="container section" v-html="res.content"/>

    <footer class="container">
      <div class="section level is-mobile">
        <span class="level-item">
          <a v-clipboard:copy="url" v-clipboard:success="onCopy">
            <b-icon class="icon is-primary" icon="share" slot="trigger"/>
          </a>
        </span>

        <span class="level-item">
          <a :href="`https://twitter.com/home?status=${urlEncoded}`" target="_blank" rel="noopener nofollow">
            <b-icon class="icon" icon="twitter"/>
          </a>
        </span>

        <span class="level-item">
          <a :href="`https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}`" target="_blank" rel="noopener nofollow">
            <b-icon class="icon" icon="facebook"/>
          </a>
        </span>

        <span class="level-item">
          <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${urlEncoded}&title=${titleEncoded}`" target="_blank" rel="noopener nofollow">
            <b-icon class="icon" icon="linkedin"/>
          </a>
        </span>
      </div>
      <div class="section has-text-centered">
        <button v-if="!showComments" class="button is-primary is-large" @click="toggleComments">Vis kommentarfelt</button>
        <vue-disqus v-if="showComments" shortname="christerolsen-no" :identifier="res.slug" :url="`https://www.christerolsen.no/blogg/${this.res.slug}`"/>
      </div>
    </footer>
  </article>
</template>

<script>
  import createGetData from '../../utils/data'

  export default {
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
      },
      toggleComments () {
        this.showComments = true
      }
    },
    data () {
      return { showComments: false }
    },
    head () {
      return {
        title: `${this.res.title} - Blogg`,
        link: [ { hid: 'canonical', rel: 'canonical', href: `https://www.christerolsen.no/blogg/${this.res.slug}` } ],
        meta: [
          { hid: 'title', property: 'title', content: this.res.title },
          { hid: 'description', name: 'description', content: this.res.excerpt },
          { hid: 'og:title', property: 'og:title', content: this.res.title },
          { hid: 'og:description', property: 'og:description', content: this.res.excerpt },
          { hid: 'og:image', property: 'og:image', content: this.res.image.url },
          { hid: 'og:type', property: 'og:type', content: 'article' }
        ]
      }
    },
    asyncData: createGetData()
  }
</script>
