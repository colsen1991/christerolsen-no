<template>
  <div>
    <hero-section title="Tjenester" type="info">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
      <p>
        Lorem ipsum scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p>
    </hero-section>

    <hero-section id="web" title="Web" size="medium" to="/tjenester/web">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
      <p>
        Lorem ipsum scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
      <nuxt-link to="/tjenester/web" class="button is-primary is-large">Les Mer</nuxt-link>
    </hero-section>

    <hero-section id="teknisk-hjelp" title="Teknisk Hjelp" type="light" size="medium" hasTextRight to="/tjenester/teknisk-hjelp">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
      <p>
        Lorem ipsum scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
      <nuxt-link to="/tjenester/teknisk-hjelp" class="button is-primary is-large">Les Mer</nuxt-link>
    </hero-section>

    <hero-section id="konsulent" title="Konsulent" size="medium" to="/tjenester/konsulent">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
      <p>
        Lorem ipsum scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
      <nuxt-link to="/tjenester/konsulent" class="button is-primary is-large">Les Mer</nuxt-link>
    </hero-section>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Tjenester',
      link: [ { rel: 'canonical', href: 'https://www.christerolsen.no/tjenester' } ],
      meta: [
        { name: 'title', content: 'Tjenester - Christer Olsen web & IT' },
        { property: 'og:title', content: 'Tjenester - Christer Olsen web & IT' }
      ]
    }
  }
</script>
