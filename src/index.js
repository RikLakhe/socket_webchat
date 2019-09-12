const dotenv = require('dotenv').config({
    path: 'config.env'
})
import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8500;

app.use(express.static(path.join(__dirname,'public')))

console.log("server started at port:",port)
app.listen(port);

