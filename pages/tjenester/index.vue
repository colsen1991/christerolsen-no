<template>
  <div>
    <hero-section title="Tjenester" type="info">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p>
      <p>
        Lorem ipsum scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p>
    </hero-section>

    <hero-section id="web" title="Web" to="/tjenester/web">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p>
      <p>
        Lorem ipsum scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p>
      <nuxt-link to="/tjenester/web" class="button is-primary is-large">Les mer</nuxt-link>
    </hero-section>

    <hero-section id="teknisk-hjelp" title="Teknisk Hjelp" type="light" hasTextRight to="/tjenester/teknisk-hjelp">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p>
      <p>
        Lorem ipsum scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p>
      <nuxt-link to="/tjenester/teknisk-hjelp" class="button is-primary is-large">Les mer</nuxt-link>
    </hero-section>

    <hero-section id="konsulent" title="Konsulent" to="/tjenester/konsulent">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p>
      <p>
        Lorem ipsum scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p>
      <nuxt-link to="/tjenester/konsulent" class="button is-primary is-large">Les mer</nuxt-link>
    </hero-section>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Tjenester',
      link: [ { hid: 'canonical', rel: 'canonical', href: 'https://www.christerolsen.no/tjenester' } ],
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'Tjenester - Christer Olsen Web & IT' }
      ]
    }
  }
</script>
