const
    express = require('express'),
    postsRouter = new express.Router({ mergeParams: true }),
    postCtrl = require('../controllers/posts.js'),
    Post = require('../models/Post.js'),
    Match = require('../models/Match.js'),
    { verifyToken } = require('../serverAuth.js')

postsRouter.get('/', (req, res) => {
    console.log(req.params.matchId)
    Post.find({}, (err, posts) => res.json(posts))
})

postsRouter.get('/:id', (req, res) => {
    console.log(req.params.matchId)
})


postsRouter.use(verifyToken)

postsRouter.post('/', (req, res) => {
    Match.findById(req.params.matchId, (err, match) => {
        match.predictions.push({ ...req.body, _by: req.user })
        match.save((err, updatedMatch) => {
            res.json({ message: "SUCCESS", payload: updatedMatch })
        })
    })
})
// postsRouter.patch('/:id', postCtrl.update)

module.exports = postsRouter

// localhost:3001/api/matches/id/posts