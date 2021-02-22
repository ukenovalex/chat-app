const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    messageText: {
        type: String,
        required: true
    },
    messageRoom: {
        type: String,
        required: true
    },
    messageFrom: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('messages', messageSchema);