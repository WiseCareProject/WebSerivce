/**
 * Created by Or Adar on 4/12/2018.
 */
const waterService = require('../services/waterService');

async function sendWaterLevelCommand(req,res){
    let result = await waterService.waterLevelCommand();
    res.status(200).send(result);
}

async function sendWaterFloatSwitchCommand(req,res){
    let result = await waterService.waterFloatSwitchCommand();
    res.status(200).send(result);
}

async function sendFillWaterCommand(req,res){
    waterService.fillWaterCommand();
    res.status(200).send({status:"filling"});
}

async function getFullWaterDetails(req,res){
    let result = await waterService.getFullDetailsCommand();
    res.status(200).send({result});
}

module.exports = {
    sendWaterLevelCommand,
    sendWaterFloatSwitchCommand,
    sendFillWaterCommand,
    getFullWaterDetails
};