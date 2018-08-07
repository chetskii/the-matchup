const
	User = require('../models/User.js'),
	{ signToken } = require('../serverAuth.js')

module.exports = {
	index: (req, res) => {
		User.find({}, (err, users) => {
			if (err) return res.json({ message: "ERROR", payload: null, code: err.code })
			res.json({ message: "SUCCESS", payload: users })
		})
	},

	show: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			if (err) return res.json({ message: "ERROR", payload: null, code: err.code })
			res.json({ message: "SUCCESS", payload: user })
		})
	},

	create: (req, res) => {
		User.create(req.body, (err, user) => {
			if (err) return res.json({ message: "ERROR", payload: null, code: err.code })
			const token = signToken(user)
			res.json({ message: "SUCCESS", payload: token })
		})
	},

	update: (req, res) => {
		if (!req.body.password) delete req.body.password;
		if (!req.body.email) delete req.body.email;
		Object.assign(req.user, req.body)
		req.user.save((err, updatedUser) => {
			if (err) return res.json({ message: "ERROR", payload: null, code: err.code })
			const token = signToken(updatedUser)
			res.json({ message: "SUCCESS", payload: { updatedUser, token } })
		})
	},

	destroy: (req, res) => {
		// User.findByIdAndRemove(req.params.id, (err, user) => {
		req.user.remove((err, user) => {
			if (err) return res.json({ message: "ERROR", payload: null, code: err.code })
			res.json({ message: "SUCCESS", payload: user })
		})
	},

	authenticate: (req, res) => {
		User.findOne({ email: req.body.email }, (err, user) => {
			if (err) return res.json({ message: "ERROR", payload: null, code: err.code })
			if (!user || !user.validPassword(req.body.password)) {
				return res.json({ message: "ERROR", payload: null, error: "Invalid Credentials." })
			}
			const token = signToken(user)
			res.json({ message: "SUCCESS", payload: token })
		})
	}
}