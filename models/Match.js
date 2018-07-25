const
    mongoose = require('mongoose'),
    matchSchema = new mongoose.Schema({
        team1: {
            name: String,
            score: Number,
            wins: Number,
            losses: Number,
            draws: Number
        },
        team2: {
            name: String,
            score: Number,
            wins: Number,
            losses: Number,
            draws: Number
        },
        date: String,
        time: String,
        venue: String,
        league: String
    })

const Match = mongoose.model('Match', matchSchema)
module.exports = Match;



// matchDate = new Date(req.body.date)
// matchDate.setUTCTime(Number(req.body.time))
// Match.create({ ...req.body, date: matchDate })