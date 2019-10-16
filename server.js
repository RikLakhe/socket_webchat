import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import {initialize, io} from './io'
import path from 'path';
import bodyParser from 'body-parser';

const app = express()
const server = http.createServer(app);

dotenv.config({
    path: '.env',
})

const IO = initialize(server)
const global_socket = io();

const hostname =  process.env.DEV_NODE || '192.168.1.149';
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/notification',
    function (req, res) {
        global_socket.emit('POPUP_NOTIFICATION', {
            message: req.body.message,
            color: req.body.color
        })
        res.send();
    }
)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

setInterval(() => {
    global_socket.emit('pulse', heartBeat())
}, 1000);

setInterval(() => {
    global_socket.emit('pulse2', heartBeat2())
}, 500);

const heartBeat = () => {
    return Math.ceil(Math.random() * (160 - 60) + 60);
}

const heartBeat2 = () => {
    return Math.ceil(Math.random() * (160 - 60) + 60);
}