const
	mongoose = require('mongoose'),
	predictionSchema = new mongoose.Schema({
        body: String,
        likes: {type: Number, default: 0},
        _by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    }),
	matchSchema = new mongoose.Schema({
		predictions: [predictionSchema],
		team1: {
			name: { type: String, required: true },
			score: { type: Number, default: 0 },
			wins: { type: Number, default: 0 },
			losses: { type: Number, default: 0 },
			draws: { type: Number, default: 0 }
		},
		team2: {
			name: { type: String, required: true },
			score: { type: Number, default: 0 },
			wins: { type: Number, default: 0 },
			losses: { type: Number, default: 0 },
			draws: { type: Number, default: 0 }
		},
		date: { type: String, required: true },
		time: { type: String, required: true },
		venue: { type: String, required: true },
		league: { type: String, required: true }
	})

const Match = mongoose.model('Match', matchSchema)
module.exports = Match;



// matchDate = new Date(req.body.date)
// matchDate.setUTCTime(Number(req.body.time))
// Match.create({ ...req.body, date: matchDate })