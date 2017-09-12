<template>
  <footer class="footer section">
    <div class="container">
      <div class="columns">
        <address class="column is-one-third has-text-centered-mobile">
          <p><strong>Kontaktinformasjon</strong></p>
          <a href="mailto:colsen1991@gmail.com">
            <b-icon class="icon is-hidden-mobile" icon="at"/>
            colsen1991@gmail.com
          </a><br>
          <a href="tel:+4747895010">
            <b-icon class="icon is-hidden-mobile" icon="phone"/>
            +47 47 89 50 10
          </a><br>
          <a href="https://goo.gl/maps/7TtrchACE7P2" target="_blank">
            <b-icon class="icon is-hidden-mobile" icon="map"/>
            Sandhorngata 33A
          </a><br>
        </address>

        <div class="column is-one-third has-text-centered">
          <p><strong>Sosiale Medier</strong></p>
          <div class="level">
            <a class="level-item" href="https://twitter.com/colsen1991" target="_blank">
              <b-icon class="icon" icon="twitter"></b-icon>
            </a>
            <a class="level-item" href="https://www.facebook.com/colsen1991" target="_blank">
              <b-icon class="icon" icon="facebook"></b-icon>
            </a>
            <a class="level-item" href="https://www.linkedin.com/in/christer-olsen-15845b53/" target="_blank">
              <b-icon class="icon" icon="linkedin"></b-icon>
            </a>
            <a class="level-item" href="https://github.com/colsen1991" target="_blank">
              <b-icon class="icon" icon="github"></b-icon>
            </a>
          </div>
        </div>

        <div class="column is-one-third has-text-right-desktop has-text-right-tablet has-text-centered-mobile">
          <p><strong>Navigasjon</strong></p>
          <nuxt-link to="/tjenester">
            Tjenester
            <b-icon class="icon is-hidden-mobile" icon="cogs"/>
          </nuxt-link>
          <br>
          <nuxt-link to="/referanser-og-prosjekter">
            Referanser og Prosjekter
            <b-icon class="icon is-hidden-mobile" icon="folder-open"/>
          </nuxt-link>
          <br>
          <nuxt-link to="/kontakt">
            Kontakt
            <b-icon class="icon is-hidden-mobile" icon="envelope"/>
          </nuxt-link>
          <br>
          <nuxt-link to="/blogg">
            Blogg
            <b-icon class="icon is-hidden-mobile" icon="file-text"/>
          </nuxt-link>
        </div>
      </div>
      <p class="has-text-centered">&copy; {{new Date().getFullYear()}} Christer Olsen</p>
      <p class="has-text-centered">Orgnr: <a href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=991991991"
                                             target="_blank">991 991 991</a></p>
      <p class="has-text-centered"><a class="has-text-grey" href="/sitemap.xml">Sitemap</a></p>
    </div>
  </footer>
</template>
