<template>
  <div>
    <hero-section title="Alt innen Web & IT" type="info" size="medium" class="has-text-centered">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p>
      <p>
        Lorem ipsum scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p>
      <br>
      <div class="is-hidden-mobile">
        <nuxt-link to="/kontakt" class="button is-primary is-large">Ta kontakt</nuxt-link>
        &nbsp;
        <nuxt-link to="/tjenester" class="button is-white is-large">Les mer</nuxt-link>
      </div>
      <div class="is-hidden-tablet level">
        <nuxt-link to="/kontakt" class="button is-primary is-large level-item">Ta kontakt</nuxt-link>
        <nuxt-link to="/tjenester" class="button is-white is-large level-item">Les mer</nuxt-link>
      </div>
    </hero-section>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Forsiden',
      link: [ { rel: 'canonical', href: 'https://www.christerolsen.no' } ],
      meta: [
        { name: 'title', content: 'Forsiden - Christer Olsen Web & IT' },
        { property: 'og:title', content: 'Forsiden - Christer Olsen Web & IT' }
      ]
    }
  }
</script>

<style lang="scss">
  .has-margin-right- {

  }
</style>
