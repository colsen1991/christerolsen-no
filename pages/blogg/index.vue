<template>
  <div>
    <hero-section title="Blogg" type="info">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et.</p>
    </hero-section>

    <hero-section v-for="(blogPost, index) in res"
                  :id="blogPost.slug"
                  :hasTextRight="((index % 2) === 1)"
                  :type="((index % 2) === 1) ? 'light' : 'white'"
                  :key="`${blogPost.slug}`">
      <blog-post-top :blogPost="blogPost"/>
    </hero-section>
  </div>
</template>

<script>
  import createGetData from '../../utils/data'

  export default {
    head: {
      title: 'Blogg',
      link: [ { hid: 'canonical', rel: 'canonical', href: 'https://www.christerolsen.no/blogg' } ],
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'Blogg - Christer Olsen Web & IT' }
      ]
    },
    asyncData: createGetData('blogg')
  }
</script>


