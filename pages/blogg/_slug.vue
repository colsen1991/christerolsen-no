<template>
  <section id="banner" class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title"><a class="anchor-link" href="#banner">#</a> {{blogPost.title}}</h1>
        {{blogPost}}
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
        const json = await res.json()

        blogPost = json.data
      } else if (isServer) {
        const { data } = require(`~/dist/data/${slug}.json`)

        blogPost = data
      }

      return { blogPost }
    }
  }
</script>
