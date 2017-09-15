<template>
  <section id="banner" class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title"><a class="anchor-link" href="#banner">#</a> {{blogPost.title}}</h1>
        <article class="content" v-html="blogPost.content"/>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    async asyncData ({ isClient, isServer, payload, params: { slug } }) {
      let blogPost = {}

      if (payload) {
        blogPost = payload
      } else if (isClient) {
        const res = await fetch(`/data/${slug}.json`)
        blogPost = await res.json()
      } else if (isServer) {
        blogPost = require(`~/dist/data/${slug}.json`)
      }

      return { blogPost }
    }
  }
</script>
