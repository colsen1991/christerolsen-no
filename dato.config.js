module.exports = (dato, root) => {
  root.directory('static/data', (dataDir) => {
    const blogPosts = dato.blogPosts

    dataDir.createPost('blogg.json', 'json', {
      frontmatter: blogPosts.map(blogPost => {
        const { slug, title } = blogPost.toMap()

        return { slug, title }
      })
    })

    blogPosts.forEach(blogPost => {
      dataDir.createPost(`${blogPost.slug}.json`, 'json', {
        frontmatter: {
          ...blogPost.toMap()
        }
      })
    })
  })
}
