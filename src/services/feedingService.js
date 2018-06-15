/**
 * Created by Or Adar on 4/4/2018.
 */
const platformHandler = require('../platformHandler/platformHandler');

function sendFeedCommand(){
    return platformHandler.feed();
}

function sendTankAmountCommand(){
    return platformHandler.foodTankAmount();
}

function sendGetPlateAmountCommand(){
    return platformHandler.foodPlateAmount();
}
function getFullDetails(){
    return new Promise(async (resolve,reject)=>{
        let result = {};
        let plateAmount = await platformHandler.foodPlateAmount();
        let tankAmount  = await platformHandler.foodTankAmount();

        result.plateAmount = plateAmount.status;
        result.tankAmount = tankAmount.status;

        resolve (result);
    });

}

function clearScaleCommand(){
    return platformHandler.clearScale();
}




module.exports ={
    sendFeedCommand,
    sendTankAmountCommand,
    sendGetPlateAmountCommand,
    getFullDetails,
    clearScaleCommand
};