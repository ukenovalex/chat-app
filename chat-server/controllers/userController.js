const User = require('../models/User');
module.exports.addUser = async function(data) {
    try {
        return await new User({
            _id: data.id,
            userName: data.name,
            userRoom: data.room
        }).save();
        
    } catch(e) {
        console.log(e);
    }
}

module.exports.removeUser = async function(id) {
    try {
        return await User.deleteOne({"_id": id});
    } catch(e) {
        console.log(e);
    }
}

module.exports.getUser = async function(id) {
    try {
        await User.findById(id);
        return await User.findById(id);;
    } catch(e) {
        console.log(e);
    }
}
module.exports.getUserToNameAndRoom = async function(name, room) {
    try {
        await User.find({userName: name, userRoom: room});
        return true;
    } catch(e) {
        console.log(e);
    }
}
module.exports.getUsersInRoom = async function(room) {
    try {
        return await User.find({userRoom: room});
    } catch(e) {
        console.log(e);
    }
}