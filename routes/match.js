const
    express = require('express'),
    matchRouter = new express.Router(),
    matchCtrl = require('../controllers/matches.js')

matchRouter.get('/', matchCtrl.index)
matchRouter.post('/', matchCtrl.create)
matchRouter.delete('/:id', matchCtrl.destroy)
matchRouter.get('/:id', matchCtrl.show)

module.exports = matchRouter