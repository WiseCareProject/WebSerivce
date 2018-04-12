/**
 * Created by Or Adar on 4/12/2018.
 */
const platformHandler = require('../platformHandler/platformHandler');

function waterLevelCommand(){
    platformHandler.waterTankDistanceStatus();
}

module.exports = {
    waterLevelCommand
};