<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="~/assets/img/logo-full.svg" alt="Christer Olsen">
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
      </div >
    </div>

    <div class="navbar-menu" :class="{'is-active': show}">
      <div class="navbar-start">
        <a class="navbar-item">About</a>
        <a class="navbar-item">Docs</a>
        <a class="navbar-item">Blog</a>
      </div>
    </div>
  </nav>
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
