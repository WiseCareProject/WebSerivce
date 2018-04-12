/**
 * Created by Or Adar on 4/12/2018.
 */
const waterService = require('../services/waterService');

async function sendWaterLevelCommand(req,res){
    waterService.waterLevelCommand();
    res.status(200).send("command send");
}

module.exports = {
    sendWaterLevelCommand
};