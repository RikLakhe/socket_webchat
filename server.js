import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import {initialize,io} from './io'
import path from 'path';

const app = express()
const server = http.createServer(app);

dotenv.config({
    path: '.env',
})

const IO = initialize(server)

const hostname =  process.env.DEV_NODE || '127.127.127.127';
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});