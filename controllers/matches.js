const
	Match = require('../models/Match.js')

module.exports = {
	index: (req, res) => {
		Match.find({}, (err, matches) => {
			if (err) return res.json({ message: "ERROR", payload: null, code: err.code })
			res.json({ message: "SUCCESS", payload: matches })
		})
	},

	show: (req, res) => {
		Match.findById(req.params.id, (err, match) => {
			if (err) return res.json({ message: "ERROR", payload: null, code: err.code })
			res.json({ message: "SUCCESS", payload: match })
		})
	},

	create: (req, res) => {
		Match.create(req.body, (err, newMatch) => {
			if (err) return res.json({ message: "ERROR", payload: null, code: err.code })
			res.json({ message: "SUCCESS", payload: newMatch })
		})
	},

	update: (req, res) => {
		Match.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedMatch) => {
			res.json({ success: true, message: "MATCH UPDATED", payload: updatedMatch })
		})
	},

	destroy: (req, res) => {
		Match.findByIdAndRemove(req.params.id, (err, match) => {
			if (err) return res.json({ message: "ERROR", payload: null, code: err.code })
			res.json({ message: "SUCCESS", payload: match })
		})
	}
}