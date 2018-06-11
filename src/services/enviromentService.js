/**
 * Created by Or Adar on 5/28/2018.
 */
const platformHandler = require('../platformHandler/platformHandler');

function sendCoolingCommand(){
    return platformHandler.turnOnCoolingDevice();
}

function sendOffCoolingCommand(){
    return platformHandler.turnOffCoolingDevice();
}

function getTemperatureCommand(){
    return platformHandler.getTemperature();
}

function sendHeatCommand(){
    return platformHandler.turnOnHeat();
}

function sendOffHeatCommand(){
    return platformHandler.turnOffHeat();
}

module.exports = {
    sendCoolingCommand,
    sendOffCoolingCommand,
    getTemperatureCommand,
    sendHeatCommand,
    sendOffHeatCommand
};