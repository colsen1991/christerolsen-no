module.exports = (dato, root) => {
  root.directory('static/data', (dataDir) => {
    dataDir.createPost('todo-changeme.json', 'json', {
      frontmatter: {}
    })
  })
}
