/**
 * Created by Or Adar on 4/4/2018.
 */
const platformHandler = require('../platformHandler/platformHandler');

function sendFeedCommand(){
    platformHandler.feed();
}

function sendTankAmountCommand(){
    platformHandler.foodTankAmount();
}

function sendGetPlateAmountCommand(){
    platformHandler.foodPlateAmount();
}

module.exports ={
    sendFeedCommand,
    sendTankAmountCommand,
    sendGetPlateAmountCommand
};