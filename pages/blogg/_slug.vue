<template>
  <article>
    <hero-section :title="blogPost.title" type="info"/>
    <hero-section class="content">
      <blog-post-top :blogPost="blogPost"></blog-post-top>
      <br>
      <div class="content" v-html="blogPost.content"/>
    </hero-section>
  </article>
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
