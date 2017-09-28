<template>
  <h2 :class="!!subtitle ? 'title' : 'subtitle'">
    <a class="anchor-link" :href="`#${id}`">#&nbsp;</a>
    <link-or-text :to="to">{{id !== 'banner' ? title : subtitle}}</link-or-text>
  </h2>
</template>

<script>
  export default {
    name: 'heading-2',
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: Boolean,
        default: true
      },
      id: {
        type: String
      },
      to: {
        type: String,
        default: ''
      }
    }
  }
</script>
