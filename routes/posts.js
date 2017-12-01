module.exports = {
  getPosts(req, res) {
    res.status(200).send(req.store.posts)
  },
  addPost(req, res) {
    let newPost = req.body
    const postId = req.store.posts.length
    store.posts.push(newPost)
    res.status(201).send({postId : postId})
  },
  updatePost(req, res) {
    req.store.posts[req.param.postId] = 
      Object.assign(req.store.posts[req.param.postId], req.body)
    res.status(200).send(req.store.posts[req.param.postId])
  },
  removePost(req, res) {
    req.store.posts.splice(req.param.postId, 1)
    res.status(204).send()
  }
}