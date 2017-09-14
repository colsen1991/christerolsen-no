<template>
  <section id="banner" class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title"><a class="anchor-link" href="#banner">#</a> Blogg</h1>
        <div v-for="blogPost in blogPosts">
          <nuxt-link :to="`/blogg/${blogPost.slug}`">{{blogPost.title}}</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    async asyncData ({ isClient, isServer, payload }) {
      let blogPosts = {}

      if (payload) {
        blogPosts = payload
      } else if (isClient) {
        const res = await fetch('/data/blogg.json')
        const json = await res.json()

        blogPosts = json.data
      } else if (isServer) {
        const { data } = require('~/dist/data/blogg.json')

        blogPosts = data
      }

      return { blogPosts }
    }
  }
</script>
