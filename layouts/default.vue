<template>
  <div>
    <SiteHeader/>
    <main>
      <nuxt/>
    </main>
    <SiteFooter/>
  </div>
</template>

<script>
  import SiteHeader from '~/components/site-header.vue'
  import SiteFooter from '~/components/site-footer.vue'

  export default {
    components: {
      SiteHeader,
      SiteFooter
    }
  }
</script>
