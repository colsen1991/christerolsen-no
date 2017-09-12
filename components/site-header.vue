<template>
  <header class="navbar section">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img aria-label="Logo for Christer Olsen" alt="Christer Olsen"
               src="~/assets/img/logo-full.png">
        </a>

        <div
          class="navbar-burger burger"
          :class="{'is-active': show}"
          @click="toggleNavbarMenu"
          @keydown.enter="toggleNavbarMenu"
          @keydown.space="toggleNavbarMenu"
          role="button"
          tabindex="0"
          :title="`${show ? 'Hide' : 'Show'} navigation menu`">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{'is-active': show}">
        <nav class="navbar-end">
          <div to="/tjenester" class="navbar-item has-dropdown is-hoverable">
            <nuxt-link to="/tjenester" class="navbar-link">
              <b-icon icon="cogs"></b-icon>&nbsp;TJENESTER
            </nuxt-link>

            <div class="navbar-dropdown">
              <nuxt-link to="/tjenester/web" class="navbar-item">
                Web
              </nuxt-link>
              <nuxt-link to="/tjenester/teknisk-hjelp" class="navbar-item">
                Teknisk Hjelp
              </nuxt-link>
              <nuxt-link to="/tjenester/konsulent" class="navbar-item">
                Konsulent
              </nuxt-link>
            </div>
          </div>
          <nuxt-link to="/referanser-og-prosjekter" class="navbar-item">
            <b-icon icon="folder-open"></b-icon>&nbsp;REFERANSER OG PROSJEKTER
          </nuxt-link>
          <nuxt-link to="/kontakt" class="navbar-item">
            <b-icon icon="envelope"></b-icon>&nbsp;KONTAKT
          </nuxt-link>
          <nuxt-link to="/blogg" class="navbar-item">
            <b-icon icon="file-text"></b-icon>&nbsp;BLOGG
          </nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      }
    },
    methods: {
      toggleNavbarMenu () {
        this.show = !this.show
      }
    }
  }
</script>

<style lang="scss">
  .navbar-item img {
    max-height: 2.75rem !important;
  }
</style>
