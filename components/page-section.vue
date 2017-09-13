<template>
  <section :id="id" class="hero is-info" :class="[hasTextRight ? rightClass : '', sizeClass ]">
    <div class="hero-body">
      <div class="container">
        <h1 class="title"><a class="anchor-link" :href="`#${id}`">#</a> {{title}}</h1>
        <slot name="content"/>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'page-section',
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
        required: true
      }
    },
    data () {
      return {
        rightClass: 'has-text-right',
        sizeClass: `is-${this.size}`
      }
    }
  }
</script>
