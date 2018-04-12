/**
 * Created by Or Adar on 4/4/2018.
 */
const server = require('http').createServer();
const ioreq = require("socket.io-request");

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

function waterTankFloatStatus(){
    if(platformSocket){
        platformSocket.emit('waterTankFloatStatus')
    }
}

function waterTankDistanceStatus(){
    if(platformSocket){
        ioreq(platformSocket).request('waterTankDistanceStatus').then((res) => {
            console.log(res);
        });
    }
}

function foodTankAmount(){
    if(platformSocket) {
        ioreq(platformSocket).request('foodTankAmount').then((res) => {
            console.log(res);
        });
    }
}

function foodPlateAmount(){
    if(platformSocket) {
        ioreq(platformSocket).request('getPlateAmount').then((res) => {
            console.log(res);
        });
    }
}

function feed(){
    if(platformSocket){
        ioreq(platformSocket).request('feed').then((res)=>{
           console.log(res);
        });
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
    fillWaterTank,
    waterTankFloatStatus,
    waterTankDistanceStatus,
    foodTankAmount,
    foodPlateAmount
};

//192.168.1.21
