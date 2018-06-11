/**
 * Created by Or Adar on 5/28/2018.
 */
const environmentService = require('../services/enviromentService');

async function sendCoolingCommand(req,res){
    let result = await environmentService.sendCoolingCommand();
    res.status(200).send(result);
}

async function sendOffCoolingCommand(req,res){
    let result = await environmentService.sendOffCoolingCommand();
    res.status(200).send(result);
}

async function getTemperatureCommand(req,res){
    let result = await environmentService.getTemperatureCommand();
    res.status(200).send(result);
}

async function sendHeatCommand(req,res){
    let result = await environmentService.sendHeatCommand();
    res.status(200).send(result);
}

async function sendOffHeatCommand(req,res){
    let result = await environmentService.sendOffHeatCommand();
    res.status(200).send(result);
}

module.exports = {
    sendCoolingCommand,
    sendOffCoolingCommand,
    getTemperatureCommand,
    sendHeatCommand,
    sendOffHeatCommand
};

//created