const Message = require('../models/Message');
module.exports.createMessage = async function (from, message, room) {
    console.log(`${from}, ${message}, ${room}`);
    try {
        await new Message({
            messageText: `${message}`,
            messageRoom: `${room}`,
            messageFrom: `${from}`
        }).save();
        return await this.getMessagesFromTheRoom(`${room}`);
    } catch(e) {
        console.log(e);
    }
}
module.exports.getMessagesFromTheRoom = async function (messageRoom) {
    try {
        const messages = await Message.find({messageRoom});       
        return messages;
    } catch(e) {
        console.log(e);
    }
}
module.exports.removeMessagesFromTheRoom = async function (messageRoom) {
    try {
        await Message.deleteMany({messageRoom});       
        return true;
    } catch(e) {
        console.log(e);
    }
}