<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img aria-label="Logo for Christer Olsen Web & IT" alt="Christer Olsen" src="~/assets/img/logo-full.png">
        </nuxt-link>

        <div
          class="navbar-burger burger"
          :class="{'is-active': showNavbarMenu}"
          @click="toggleNavbarMenu"
          @keydown.enter="toggleNavbarMenu"
          role="button"
          tabindex="0"
          :title="`${showNavbarMenu ? 'Skjul' : 'Vis'} navigasjonsmeny`">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu"
           :class="{'is-active': showNavbarMenu}"
           @click="hideNavbarMenu"
           @keypress.enter="hideNavbarMenu">
        <nav class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link to="/tjenester" class="navbar-link">
              <b-icon icon="cogs"></b-icon>&nbsp;TJENESTER
            </nuxt-link>

            <div class="navbar-dropdown">
              <nuxt-link to="/tjenester/web" class="navbar-item">Web</nuxt-link>
              <nuxt-link to="/tjenester/teknisk-hjelp" class="navbar-item">Teknisk Hjelp</nuxt-link>
              <nuxt-link to="/tjenester/konsulent" class="navbar-item">Konsulent</nuxt-link>
            </div>
          </div>
          <nuxt-link to="/portfolio" class="navbar-item">
            <b-icon icon="folder-open"></b-icon>&nbsp;PORTFOLIO
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
    name: 'site-header',
    data () {
      return {
        showNavbarMenu: false
      }
    },
    methods: {
      toggleNavbarMenu () {
        this.showNavbarMenu = !this.showNavbarMenu
      },
      hideNavbarMenu () {
        this.showNavbarMenu = false
        document.querySelector('.navbar-burger').focus()
      }
    }
  }
</script>
