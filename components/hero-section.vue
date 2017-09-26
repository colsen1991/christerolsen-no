<template>
  <section :id="id" class="hero" :class="[hasTextRight ? 'has-text-right' : '', `is-${this.size}`, `is-${this.type}`]">
    <div class="hero-body">
      <div class="container" :class="hasContent ? 'content is-medium' : ''">
        <header v-if="!!title">
          <heading-1 v-if="id === 'banner'" :id="id" :title="title" :to="to"/>
          <heading-2 v-if="id !== 'banner' || subtitle" :id="id" :title="title" :subtitle="id !== 'banner'" :to="to"/>
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
      hasContent: {
        type: Boolean,
        default: true
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
      },
      to: {
        type: String,
        default: ''
      },
    }
  }
</script>
