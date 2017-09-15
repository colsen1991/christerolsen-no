<template>
  <div>
    <hero-section title="Blogg" type="info">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et,
        tincidunt at ante. Quisque semlibero, luctus id nulla quis.
      </p>
    </hero-section>
    <hero-section v-for="(blogPost, index) in blogPosts"
                  :id="blogPost.slug"
                  :title="blogPost.title"
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
  export default {
    async asyncData ({ isClient, isServer, payload }) {
      let blogPosts = {}

      if (payload) {
        blogPosts = payload
      } else if (isClient) {
        const res = await fetch('/data/blogg.json')
        blogPosts = await res.json()
      } else if (isServer) {
        blogPosts = require('~/dist/data/blogg.json')
      }

      return { blogPosts }
    }
  }
</script>
