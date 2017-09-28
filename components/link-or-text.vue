<template>
  <span>
    <nuxt-link v-if="!!to" :to="to">
      <slot/>
    </nuxt-link>
    <span v-if="!to">
      <slot/>
    </span>
  </span>
</template>

<script>
  export default {
    name: 'link-or-text',
    props: {
      to: {
        type: String,
        required: true
      }
    }
  }
</script>
