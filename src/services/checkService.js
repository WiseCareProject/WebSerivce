/**
 * Created by Or Adar on 6/11/2018.
 */
const platformHandler = require('../platformHandler/platformHandler');

function checkStatusOfDevices(){
    return platformHandler.devicesStatus();
}

module.exports = {
    checkStatusOfDevices
};