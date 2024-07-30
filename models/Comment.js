const mongoose = require('mongoose')
const { model, Schema } = require('mongoose')
mongoose.Schema.Types.String.set('trim', true);
const commentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
});
module.exports = model('Comment', commentSchema);
