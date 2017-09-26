<template>
  <h1 class="title">
    <a class="anchor-link" :href="`#${id}`">#&nbsp;</a>
    <link-or-text :to="to">{{title}}</link-or-text>
  </h1>
</template>

<script>
  export default {
    name: 'heading-1',
    props: {
      title: {
        type: String,
        required: true
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
