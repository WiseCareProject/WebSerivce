/**
 * Created by Or Adar on 5/5/2018.
 */

const platformHandler = require('../platformHandler/platformHandler');

function registerDevice(deviceProperties){
    return platformHandler.register(deviceProperties);
}

module.exports = {
    registerDevice
};

