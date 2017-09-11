<template>
  <header class="navbar section">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img aria-label="Logo for Christer Olsen" alt="Christer Olsen"
               src="~/assets/img/logo-full.svg">
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
            <b-icon icon="cogs"></b-icon>&nbsp;TJENESTER
          </nuxt-link>
          <nuxt-link to="/prosjekter" class="navbar-item">
            <b-icon icon="folder-open"></b-icon>&nbsp;PROSJEKTER
          </nuxt-link>
          <nuxt-link to="/referanser" class="navbar-item">
            <b-icon icon="comments"></b-icon>&nbsp;REFERANSER
          </nuxt-link>
          <nuxt-link to="/kontakt" class="navbar-item">
            <b-icon icon="envelope"></b-icon>&nbsp;KONTAKT
          </nuxt-link>
          <nuxt-link to="/blog" class="navbar-item">
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
