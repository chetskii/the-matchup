const
    express = require('express'),
    postsRouter = new express.Router({ mergeParams: true }),
    postCtrl = require('../controllers/posts.js'),
    Post = require('../models/Post.js')
    matchRouter = require('./match.js')

postsRouter.get('/', (req, res) => {
    console.log(req.params.matchId)
    Post.find({}, (err, posts) => res.json(posts))
})

postsRouter.get('/:id', (req, res) => {
    console.log(req.params.matchId)
})

postsRouter.post('/', (req, res) => {
    // res.json({ status: "SUCCESS" })
    Post.create({ ...req.body, _by: req.user, _match: req.params.matchId }, (err, newPost) => {
        if (err) return res.json({ message: "ERROR", payload: null, code: err.code })
        res.json({ message: "SUCCESS", payload: newPost })
    })
})
// postsRouter.patch('/:id', postCtrl.update)

module.exports = postsRouter

// localhost:3001/api/matches/id/posts