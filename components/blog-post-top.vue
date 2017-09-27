<template>
  <div>
    <heading-1 v-if="!link" :id="blogPost.slug" :title="blogPost.title"/>
    <heading-2 v-if="link" :id="blogPost.slug" :title="blogPost.title" :to="`/blogg/${blogPost.slug}`"/>

    <nuxt-link v-if="link" :to="`/blogg/${blogPost.slug}`">
      <img v-lazy="blogPost.image.url" width="100%" :title="blogPost.image.title" :alt="blogPost.image.alt"/>
    </nuxt-link>
    <img v-if="!link" width="100%" v-lazy="blogPost.image.url" :title="blogPost.image.title" :alt="blogPost.image.alt"/>

    <div class="level is-mobile">
      <b-taglist class="level-left is-marginless">
        <b-tag v-for="tag in blogPost.tags.split(',')" :key="`${blogPost.slug}-${tag}`" class="is-success">
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

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
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
