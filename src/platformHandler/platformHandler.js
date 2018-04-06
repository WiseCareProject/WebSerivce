/**
 * Created by Or Adar on 4/4/2018.
 */
const server = require('http').createServer();

let platformSocket;
const io = require('socket.io')(server,{
    path: '/wiseCarePlatform',
    serveClient: false,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false});



    io.on('connection',(socket)=>{
    console.log('new connection');
    const platformEvents = require('./platformEvents')(socket);
    platformSocket = socket;
    });

function sendUserSettings(settings){
    if(platformSocket) {
        platformSocket.emit('userSettings', settings);
    }
}

function fillWaterTank(){
    if(platformSocket){
        platformSocket.emit('fillWaterTank');
    }
}

function feed(){
    if(platformSocket){
        platformSocket.emit('feed');
    }
}

function openSocket(){

    server.listen(3001,(err)=>{
        if (err){
            console.error(err);
        }else{
            console.log('socket server listening on port 3001');
        }
    });
}

module.exports = {
    openSocket,
    feed,
    sendUserSettings,
    fillWaterTank
};

