<template>
  <div>
    <hero-section title="Blogg" type="info">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et,
        tincidunt at ante. Quisque semlibero, luctus id nulla quis.
      </p>
    </hero-section>
    <hero-section v-for="(blogPost, index) in res"
                  :id="blogPost.slug"
                  :title="blogPost.title"
                  :to="`/blogg/${blogPost.slug}`"
                  size="medium"
                  :hasTextRight="((index % 2) === 1)"
                  :type="((index % 2) === 1) ? 'light' : 'white'"
                  :key="`${blogPost.slug}`">
      <br>
      <blog-post-top :blogPost="blogPost"/>
      <br>
      <nuxt-link :to="`/blogg/${blogPost.slug}`" class="button is-primary is-large">Les Innlegget</nuxt-link>
    </hero-section>
  </div>
</template>

<script>
  import createGetData from '../../utils/data'

  export default {
    head: {
      title: 'Blogg',
      link: [ { rel: 'canonical', href: 'https://www.christerolsen.no/blogg' } ],
      meta: [
        { name: 'title', content: 'Blogg - Christer Olsen Web & IT' },
        { property: 'og:title', content: 'Blogg - Christer Olsen Web & IT' }
      ]
    },
    asyncData: createGetData('blogg')
  }
</script>


