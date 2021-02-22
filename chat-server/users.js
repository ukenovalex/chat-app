const users = require('./controllers/userController');

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.getUserToNameAndRoom(name, room);

    if(!existingUser) {
        return { error: 'Username is taking' }
    }

    const user = { id, name, room };
    users.addUser(user);
    return user;
}

const removeUser = (id) => {
    const removed = users.removeUser(id);
    removed.then(remov => console.log(remov))
    if(removed) {
        return true;
    }
}

const getUser = async (id) => {
    let user;
    return await users.getUser(id);
};

const getUsersInRoom = (room) => { return users.getUsersInRoom(room)};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };