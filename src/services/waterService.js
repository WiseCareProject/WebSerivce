/**
 * Created by Or Adar on 4/12/2018.
 */
const platformHandler = require('../platformHandler/platformHandler');

function waterLevelCommand(){
    return platformHandler.waterTankDistanceStatus();
}

function waterFloatSwitchCommand(){
        return platformHandler.waterTankFloatStatus();
}

function fillWaterCommand(){
    return platformHandler.fillWaterTank();
}

function getFullDetailsCommand(){
    return new Promise(async (resolve,reject)=>{
        let result = {};
        let floatSwitch = await platformHandler.waterTankFloatStatus();
        let distance  = await platformHandler.waterTankDistanceStatus();

        result.floatSwitch = floatSwitch.amount;
        result.levelOfWater = distance.amount;

        resolve (result);
    });
}


module.exports = {
    waterLevelCommand,
    waterFloatSwitchCommand,
    fillWaterCommand,
    getFullDetailsCommand

};