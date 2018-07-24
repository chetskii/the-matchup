const
    mongoose = require('mongoose'),
    matchSchema = new mongoose.Schema({
        team1: {
            name: String,
            score: Number
        },
        team2: {
            name: String,
            score: Number
        },
        date: Date,
        venue: String,
        league: String
    })

const Match = mongoose.model('Match', matchSchema)
module.exports = Match;