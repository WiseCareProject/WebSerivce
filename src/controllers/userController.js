/**
 * Created by Or Adar on 3/16/2018.
 */
const userServices = require('../services/userServices');
const autoEvents = require('../platformHandler/autoEvents');

async function setUserSettings(req,res){
    try{
        let settings = req.body ? req.body : {};
        console.log(settings);
        autoEvents.updateFeedingTimeObjectAndAutoMode(settings);
        await userServices.setUserSettings(settings);
        res.status(200).send({status:"userSettingsSaved"});

    }
    catch (err){
        console.error(err);
        res.status(500).send({error:err});
    }
}

async function getUserSettingsByPlatformId(req,res){
    try{
        let platformId = req.body.uniquePlatformId ? req.body.uniquePlatformId : {};
        let doc = await userServices.getUserSettingsByPlatformId(platformId);
        res.status(200).send(doc);
    }
    catch (err){
        res.status(500).send({error:err});
    }
}

async function createUser(req,res){
    try{
        let userParameters = req.body ? req.body : {};
        await userServices.createUser(userParameters);
        res.status(200).send({status:"User created successfully"});
    }
    catch (err){
        res.status(400).send({error:err});
    }
}

async function getUserDetails(req,res){
    try{
        let uniqueId = req.body.uniquePlatformId ? req.body.uniquePlatformId : "";
        let details = await userServices.getUserDetails(uniqueId);
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
        res.send(details);
    }
    catch (err){
        res.status(400).send({error:err});
    }
}


module.exports = {
    setUserSettings,
    getUserSettingsByPlatformId,
    createUser,
    getUserDetails,
};