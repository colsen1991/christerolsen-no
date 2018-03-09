<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img aria-label="Logo" alt="Site Logo" v-lazy="'/logo.png'">
        </nuxt-link>

        <span class="navbar-burger"
             :class="{'is-active': showNavbarMenu}"
             :title="`${showNavbarMenu ? 'Skjul' : 'Vis'} navigasjonsmeny`"
             role="button"
             tabindex="0"
             @click="toggleNavbarMenu"
             @keydown.enter="toggleNavbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div class="navbar-menu"
           :class="{'is-active': showNavbarMenu}"
           @click="hideNavbarMenu"
           @keypress.enter="hideNavbarMenu">
        <nav class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link to="#lorem" class="navbar-link">LOREM</nuxt-link>

            <div class="navbar-dropdown">
              <nuxt-link to="#ipsum" class="navbar-item">Ipsum</nuxt-link>
              <nuxt-link to="#dolor" class="navbar-item">Dolor</nuxt-link>
            </div>
          </div>
          <nuxt-link to="#sit" class="navbar-item">SIT</nuxt-link>
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
