const
    mongoose = require('mongoose'),
    PostSchema = new mongoose.Schema({
        body: String,
        likes: Number,
        _by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        _match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' }
    })


const Post = mongoose.model('Post', PostSchema)
module.exports = Post