const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const http = require('http').Server(app);
const io = require('socket.io')(http);
const config = {}; // hardcoded

io.on('connection', function (socket) {
    console.log('connected')
    socket.on('send_url', (data) => {
        console.log('received')
    });
});

http.listen(5000); // note to do http.listen
