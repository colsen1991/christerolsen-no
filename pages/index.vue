<template>
  <div>
    <hero-section title="Alt innen web & IT" type="info">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
      <p>
        Lorem ipsum scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
    </hero-section>

    <hero-section id="tjenester" title="Tjenester" size="medium">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
      <nuxt-link to="/tjenester" class="button is-primary is-large">Les Mer</nuxt-link>
    </hero-section>

    <hero-section id="referanser-og-prosjekter" title="Referanser og Prosjekter" size="medium" type="light"
                  hasTextRight>
      <p>
        Lorem ipsum scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
      <nuxt-link to="/kontakt" class="button is-primary is-large">Les Mer</nuxt-link>
    </hero-section>

    <hero-section id="kontakt" title="Ta Kontakt" size="medium">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa lacus, scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
      <p>
        Lorem ipsum scelerisque sit amet porta et, tincidunt at ante. Quisque sem
        libero, luctus id nulla quis, ultrices pharetra erat. Fringilla vitae velit id, sodales rhoncus est.
      </p><br>
      <nuxt-link to="/kontakt" class="button is-primary is-large">Ta kontakt</nuxt-link>
    </hero-section>
  </div>
</template>
