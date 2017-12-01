module.exports = {
  getComments(req, res) {
    res.status(200).send(req.store.posts[req.param.postId].comments)
  },
  addComment(req, res) {
    let newComment = req.body
    const postId = req.param.postId
    let commentId = req.store.posts[postId].comments.length
    store.posts[postId].comments.push(newComment)
    res.status(201).send({commentId : commentId})
  },
  updateComment(req, res) {
    const postId = req.param.postId
    const commentId = req.param.commentId
    req.store.posts[postId].comments[commentId] = 
      Object.assign(req.store.posts[postId].comments[commentId], updatedComment)
    res.status(200).send(req.store.posts[postId].comments[commentId])
  },
  removeComment(req, res) {
    const postId = req.param.postId
    const commentId = req.param.commentId
    req.store.posts[postId].comments.splice(commentId, 1)
    res.status(204).send()
  }
}