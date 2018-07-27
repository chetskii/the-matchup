const
	Post = require('../models/Post.js')

module.exports = {

	create: (req, res) => {
		Post.create({ ...req.body, _by: req.user, _match: req.params.id }, (err, newPost) => {
			if (err) return res.json({ message: "ERROR", payload: null, code: err.code })
			res.json({ message: "SUCCESS", payload: newPost })
		})
	}
}


    // create: (req, res) => {
    //     Post.create({ ...req.body, _by: req.user, _match: req.params.id })

    // }
