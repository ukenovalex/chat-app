const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const messagesController = require('./controllers/messagesController')
function socket(io) {
    io.on('connection', (socket) => {

        socket.on('join', ({ name, room }, callback) => {
            const user = addUser({ id: socket.id, name, room });
            console.log(user.name + " is joing");
            socket.emit(
                'adminMessage',
                `${user.name}, приветствуем вас в комнате "${user.room}"!`);
            socket.broadcast.to(user.room).emit(
                'adminMessage',
                `${user.name}, присоединился.`);
            socket.join(user.room);
            messagesController.getMessagesFromTheRoom(user.room).then(msg => callback(msg));
        });

        socket.on('sendMessage', (message) => {
            getUser(socket.id).then((user) => {
                const messageArr = messagesController.createMessage(message.user, message.text, user.userRoom);
                messageArr.then((msg) => {
                    socket.emit('message', msg)
                    socket.to(user.userRoom).emit('message', msg);
                })           
            });

        });
        socket.on('disconnect', () => {
            const user = getUser(socket.id);
            user.then(item => {
                if (item) {
                    removeUser(socket.id);
                    io.to(item.userRoom).emit(
                        'adminMessage',
                        `${item.userName} вышел из комнаты.`);
                }
                getUsersInRoom(item.userRoom).then(arr => {
                    if (arr.length === 0) {
                        messagesController.removeMessagesFromTheRoom(item.userRoom);
                    }
                })
            })

        });
    });
}

module.exports = socket;