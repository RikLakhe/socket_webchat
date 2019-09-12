import http from 'http';
import express from 'express';
import dotenv from 'dotenv';

// import path from 'path';

const app = express()
const server = http.createServer(app);

dotenv.config({
    path: '.env',
})

const hostname =  process.env.DEV_NODE || '127.127.127.127';
const port = process.env.PORT || 8000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});