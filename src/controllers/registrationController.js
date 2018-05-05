/**
 * Created by Or Adar on 5/5/2018.
 */

const registrationService = require('../services/registrationService');

async function register(req,res){
    let deviceProperties = {};

    deviceProperties.ip = req.query.ip;
    deviceProperties.device = req.query.device;
    console.log(req.query.ip);
    console.log(req.query.device);
    let result = await registrationService.registerDevice(deviceProperties);
    res.status(200);
    res.send(result);
}

module.exports = {
    register
};