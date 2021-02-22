const express = require('express');
const mongoose = require('mongoose');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const keys = require('./config/keys');


const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
// app.use(require('cors')())
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Mongo is connected'))
    .catch(error => console.log(error))

app.use(require('morgan')('dev'));

const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});


app.use(router);

require('./socket.js')(io);



server.listen(PORT, () => {
    console.log('Server is running ' + PORT);
});
