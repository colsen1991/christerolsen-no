<template>
  <div>
    <nuxt-link v-if="link" :to="`/blogg/${blogPost.slug}`">
      <img width="100%" :title="blogPost.image.title" :alt="blogPost.image.alt" :src="blogPost.image.url"/>
    </nuxt-link>
    <img v-if="!link" width="100%" :title="blogPost.image.title" :alt="blogPost.image.alt" :src="blogPost.image.url"/>
    <div class="level is-mobile">
      <b-taglist class="level-left is-marginless">
        <b-tag v-for="tag in blogPost.tags.split(',')"
               :key="`${blogPost.slug}-${tag}`"
               class="is-success">
          {{tag}}
        </b-tag>
      </b-taglist>
      <time class="level-right" :datetime="blogPost.updatedAt">
        {{date}}
      </time>
    </div>
    <div v-html="blogPost.excerpt"></div>
  </div>
</template>

<script>
  export default {
    name: 'blog-post-top',
    computed: {
      date () {
        const date = new Date(this.blogPost.updatedAt)

        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
      }
    },
    props: {
      blogPost: {
        type: Object,
        required: true
      },
      link: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
