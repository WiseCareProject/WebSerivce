/**
 * Created by Or Adar on 3/1/2018.
 */
const feedingService = require('../services/feedingService');

async function sendFeedingCommand(req,res){
        feedingService.sendFeedCommand();
        res.status(200).send("command send");
}
module.exports = {
    sendFeedingCommand
};