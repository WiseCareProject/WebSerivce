/**
 * Created by Or Adar on 3/1/2018.
 */
const feedingService = require('../services/feedingService');

async function sendFeedingCommand(req,res){
    let result = feedingService.sendFeedCommand();
    res.status(200).send({status:'OK'});
}

async function getTankAmountCommand(req,res){
    let result = await feedingService.sendTankAmountCommand();
    res.status(200).send(result);
}
async function getPlateAmountCommand(req,res){
    let result = await feedingService.sendGetPlateAmountCommand();
    res.status(200).send(result);
}

async function getFullDetails(req,res){
    let result = await feedingService.getFullDetails();
    res.status(200).send(result);
}

async function clearScale(req,res){
    let result = await feedingService.clearScaleCommand();
    res.status(200).send(result);
}




module.exports = {
    sendFeedingCommand,
    getTankAmountCommand,
    getPlateAmountCommand,
    getFullDetails,
    clearScale
};