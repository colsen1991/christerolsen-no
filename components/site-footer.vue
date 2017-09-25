<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <address class="column is-one-third has-text-centered-mobile">
          <p><strong>Kontaktinformasjon</strong></p>
          <a href="https://goo.gl/maps/7TtrchACE7P2" target="noopener" rel="nofollow">
            SANDHORNGT. 33A 8008 BODØ
          </a>
          <br>
          <a href="mailto:colsen1991@gmail.com">
            COLSEN1991@GMAIL.COM
          </a>
          <br>
          <a href="tel:+4747895010">
            +47 47 89 50 10
          </a>
        </address>

        <hr class="is-hidden-tablet">

        <div class="column is-one-third has-text-centered">
          <p><strong>Sosiale Medier</strong></p>
          <div class="level is-mobile">
            <span class="level-item">
              <a href="https://twitter.com/colsen1991" target="noopener" rel="nofollow">
                <b-icon class="icon" icon="twitter"/>
              </a>
            </span>
            <span class="level-item">
              <a href="https://www.facebook.com/colsen1991" target="noopener" rel="nofollow">
                <b-icon class="icon" icon="facebook"/>
              </a>
            </span>
            <span class="level-item">
              <a href="https://www.linkedin.com/in/christer-olsen-15845b53/" target="noopener" rel="nofollow">
                <b-icon class="icon" icon="linkedin"/>
              </a>
            </span>
            <span class="level-item">
              <a href="https://github.com/colsen1991" target="noopener" rel="nofollow">
                <b-icon class="icon" icon="github"/>
              </a>
            </span>
          </div>
        </div>

        <hr class="is-hidden-tablet">

        <div class="column is-one-third has-text-right-tablet has-text-centered-mobile">
          <p><strong>Navigasjon</strong></p>
          <nuxt-link to="/">HJEM</nuxt-link>
          <br>
          <nuxt-link to="/tjenester">TJENESTER</nuxt-link>
          <br>
          <div class="pad-right-6-tablet pad-right-6-desktop">
            <nuxt-link to="/tjenester/web">Web</nuxt-link>
            <br>
            <nuxt-link to="/tjenester/teknisk-hjelp">Teknisk Hjelp</nuxt-link>
            <br>
            <nuxt-link to="/tjenester/konsulent">Konsulent</nuxt-link>
          </div>
          <nuxt-link to="/portfolio">PORTFOLIO</nuxt-link>
          <br>
          <nuxt-link to="/kontakt">KONTAKT</nuxt-link>
          <br>
          <nuxt-link to="/blogg">BLOGG</nuxt-link>
        </div>
      </div>

      <hr class="is-hidden-tablet">

      <p class="has-text-centered">&copy; {{new Date().getFullYear()}} CHRISTER OLSEN</p>
      <p class="has-text-centered">ORGNR: <a href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=991991991"
                                             target="noopener" rel="nofollow">991 991 991</a></p>
      <p class="has-text-centered"><a class="has-text-grey" href="/sitemap.xml">SITEMAP</a></p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'site-footer'
  }
</script>
