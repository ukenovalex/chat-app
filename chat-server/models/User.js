const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userRoom: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('users', userSchema);