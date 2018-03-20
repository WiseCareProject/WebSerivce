/**
 * Created by Or Adar on 3/16/2018.
 */
const userSchema = require('../models/usersSchema');
const userSettingsSchema = require('../models/userSettingsSchema');

function setUserSettings(settings){
    userSettingsSchema.findOneAndUpdate({'uniquePlatformId':settings.uniquePlatformId},settings,{upsert:true},(err,doc)=>{
        if(err){
            throw err;
        }
        else return "success";
    })
}

function getUserSettingsByPlatformId(platformId){
    userSettingsSchema.findOne({'uniquePlatformId':platformId},(err,doc)=>{
        if (err){
            throw err;
        }else{
            return doc;
        }
    })
}

module.exports = {
    setUserSettings,
    getUserSettingsByPlatformId
};