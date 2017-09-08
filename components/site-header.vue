<template>
  <header class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img aria-label="Logo for Christer Olsen" alt="Christer Olsen" src="~/assets/img/logo-full.svg">
      </a>

      <a class="navbar-item" href="https://twitter.com/colsen1991" target="_blank">
        <b-icon icon="twitter"></b-icon>
      </a>
      <a class="navbar-item" href="https://www.facebook.com/colsen1991" target="_blank">
        <b-icon icon="facebook"></b-icon>
      </a>
      <a class="navbar-item" href="https://www.linkedin.com/in/christer-olsen-15845b53/" target="_blank">
        <b-icon icon="linkedin"></b-icon>
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
        <nuxt-link to="/tjenester" class="navbar-item">
          <b-icon icon="cogs"></b-icon>&nbsp;Tjenester
        </nuxt-link>
        <nuxt-link to="/prosjekter" class="navbar-item">
          <b-icon icon="folder-open"></b-icon>&nbsp;Prosjekter
        </nuxt-link>
        <nuxt-link to="/referanser" class="navbar-item">
          <b-icon icon="comments"></b-icon>&nbsp;Referanser
        </nuxt-link>
        <nuxt-link to="/kontakt" class="navbar-item">
          <b-icon icon="envelope"></b-icon>&nbsp;Kontakt
        </nuxt-link>
        <nuxt-link to="/blog" class="navbar-item">
          <b-icon icon="file-text"></b-icon>&nbsp;Blog
        </nuxt-link>
      </nav>
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
