<template>
  <div>
    <img width="100%" :title="blogPost.image.title" :alt="blogPost.image.alt" :src="blogPost.image.url"/>
    <div class="level is-mobile">
      <b-taglist class="level-left is-marginless">
        <b-tag v-for="tag in blogPost.tags.split(',')"
               :key="`${blogPost.slug}-${tag}`"
               class="is-success">
          {{tag}}
        </b-tag>
      </b-taglist>
      <time class="level-right" :datetime="blogPost.updatedAt">
        {{new Date(blogPost.updatedAt).toDateString()}}
      </time>
    </div>
    <div class="content" v-html="blogPost.excerpt"></div>
  </div>
</template>

<script>
  export default {
    name: 'blog-post-top',
    props: {
      blogPost: {
        type: Object,
        required: true
      }
    }
  }
</script>
