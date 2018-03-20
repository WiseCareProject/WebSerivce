/**
 * Created by Or Adar on 3/16/2018.
 */
const userServices = require('../services/userServices');

function setUserSettings(req,res){
    let settings = req.body ? req.body : {};
    userServices.setUserSettings(settings).then(()=>{
        res.status(200).send({status:"userSettingsSaved"});
    }).catch((err)=>{
        res.status(500).send({error:err});
    });
}

function getUserSettingsByPlatformId(req,res){
    let platformId = req.body ? req.body : {};
    userServices.getUserSettingsByPlatformId(platformId).then((doc)=>{
        res.status(200).send(doc);
    }).catch((err)=>{
        res.status(404).send({error:err});
    })
}

module.exports = {
    setUserSettings,
    getUserSettingsByPlatformId
};