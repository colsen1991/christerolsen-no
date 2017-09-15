<template>
  <section :id="id" class="hero" :class="[hasTextRight ? rightClass : '', sizeClass, typeClass ]">
    <div class="hero-body">
      <div class="container">
        <header v-if="!!title">
          <h1 v-if="id === 'banner'" class="title">
            <a class="anchor-link" :href="`#${id}`">#</a>
            {{title}}
          </h1>

          <h2 v-if="id !== 'banner' || subtitle"
              :class="id !== 'banner' ? 'title' : 'subtitle'">
            <a class="anchor-link" :href="`#${id}`">#</a>
            {{id !== 'banner' ? title : subtitle}}
          </h2>

          <h3 v-if="id !== 'banner' && subtitle" class="subtitle">
            <a class="anchor-link" :href="`#${id}`">#</a>
            {{subtitle}}
          </h3>
        </header>

        <slot/>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'hero-section',
    props: {
      id: {
        type: String,
        default: 'banner'
      },
      size: {
        type: String,
        default: 'small'
      },
      hasTextRight: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'white'
      },
      subtitle: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        rightClass: 'has-text-right',
        sizeClass: `is-${this.size}`,
        typeClass: `is-${this.type}`
      }
    }
  }
</script>
