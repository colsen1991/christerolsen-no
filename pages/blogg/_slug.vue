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
    asyncData: createGetData()
  }
</script>
