const
    express = require('express'),
    matchRouter = new express.Router(),
    matchCtrl = require('../controllers/matches.js'),
    postsRouter = require('./post.js');

matchRouter.use('/:matchId/posts', postsRouter)
matchRouter.get('/', matchCtrl.index)
matchRouter.post('/', matchCtrl.create)
matchRouter.delete('/:id', matchCtrl.destroy)
matchRouter.get('/:id', matchCtrl.show)
matchRouter.patch('/:id', matchCtrl.update)
module.exports = matchRouter