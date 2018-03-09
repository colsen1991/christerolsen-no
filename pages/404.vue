<template>
  <section>
    <page-header class="container content has-text-centered">
      <h1>404 - Siden finnes ikke</h1>
    </page-header>
    <div class="hero">
      <div class="hero-body">
        <div class="container content has-text-centered">
          <p>Usikker på hvordan du havnet her...</p>
          <p>Beklager det!</p>
          <nuxt-link to="/">Tilbake til forsiden</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // import generelt from '../static/data/generelt.json'

  export default {
    data () {
      return {}
    },
    head () {
      return {
        /*
        title: 'Ukjent feil',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Ukjent feil - ${this.tittel}` },
          { hid: 'description', name: 'description', content: '' },
          { hid: 'og:description', property: 'og:description', content: '' },
          { hid: 'og:image', property: 'og:image', content: this.bilde.url },
          { hid: 'twitter:image', property: 'twitter:image', content: this.bilde.url }
        ]
        */
      }
    }
  }
</script>
