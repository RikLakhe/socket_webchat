import sio from 'socket.io';

let io = null;

exports.initialize = (server) =>{
    io = sio(server);

    io.on('connection', (socket) => {
        console.log(`A user connected with ${socket.id}`);
    })
};

exports.io = () =>{
    return io;
};