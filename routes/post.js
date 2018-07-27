const
    express = require('express'),
    postRouter = new express.Router(),
    postCtrl = require('../controllers/posts.js')

postRouter.post('/matches/:id/posts', postCtrl.create)

module.exports = postRouter

// .post('/matches/:id/posts')