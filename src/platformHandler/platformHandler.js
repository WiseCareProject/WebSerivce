/**
 * Created by Or Adar on 4/4/2018.
 */
const server = require('http').createServer();
const ioreq = require("socket.io-request");
const iostr = require('socket.io-stream');
const fs = require('fs');
let stream = iostr.createStream();
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

async function fillWaterTank(){
    if(platformSocket){
        let res = await ioreq(platformSocket).request('fillWaterTank');
        return res;
    }
}

async function waterTankFloatStatus(){
    if(platformSocket){
        let res = await ioreq(platformSocket).request('waterTankFloatStatus');
        return res;
    }
}

async function waterTankDistanceStatus(){
    if(platformSocket){
        let res = await ioreq(platformSocket).request('waterTankDistanceStatus');
        return res;
    }
}

async function foodTankAmount(){
    if(platformSocket) {
        let res = await ioreq(platformSocket).request('foodTankAmount');
        return res;
    }
}

async function foodPlateAmount(){
    if(platformSocket) {
        let res = await ioreq(platformSocket).request('getPlateAmount');
        return res;
    }
}

async function stopServo(){
    if(platformSocket) {
        let res = await ioreq(platformSocket).request('stopServo');
        return res;
    }
}

async function feed(){
    if(platformSocket){
        let res = await ioreq(platformSocket).request('feed');
        return res;
    }
}

async function register(deviceProperties){
    if(platformSocket){
        let res = await ioreq(platformSocket).request('register',deviceProperties);
        return res;
    }
}

async function turnOnCoolingDevice(){
    if(platformSocket){
        let res = await ioreq(platformSocket).request('turnOnCooling');
        return {"Vent":"On"};
    }
}

async function turnOffCoolingDevice(){
    if(platformSocket){
        let res = await ioreq(platformSocket).request('turnOffCooling');
        return {"Vent":"Off"};
    }
}

async function getTemperature(){
    if(platformSocket){
        let res = await ioreq(platformSocket).request('getTemperature');
        return res;
    }
}

async function turnOnHeat(){
    if(platformSocket){
        let res = await ioreq(platformSocket).request('turnOnHeat');
        return {"Blanket":"On"};
    }
}

async function turnOffHeat(){
    if(platformSocket){
        let res = await ioreq(platformSocket).request('turnOffHeat');
        return {"Blanket":"Off"};
    }
}

async function devicesStatus(){
    if(platformSocket){
        let res = await ioreq(platformSocket).request('devicesStatus');
        return res;
    }
}

async function getSnapshot(){
    return new Promise ((resolve,reject)=>{
        iostr(platformSocket).emit('getSnap',stream);
        stream.pipe(fs.createWriteStream('image.jpg'));
        resolve();
    });
}

function resetStream(){
    stream.end();
    stream = iostr.createStream();
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
    foodPlateAmount,
    register,
    turnOnCoolingDevice,
    turnOffCoolingDevice,
    getTemperature,
    turnOnHeat,
    turnOffHeat,
    devicesStatus,
    stopServo,
    getSnapshot,
    resetStream
};

//192.168.1.21
