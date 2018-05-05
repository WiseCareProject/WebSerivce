/**
 * Created by Or Adar on 3/16/2018.
 */
const userSchema = require('../models/usersSchema');
const userSettingsSchema = require('../models/userSettingsSchema');
const platformHandler = require('../platformHandler/platformHandler');


function setUserSettings(settings){
    return new Promise((resolve,reject)=>{
        platformHandler.sendUserSettings(settings);
        userSettingsSchema.findOneAndUpdate({'uniquePlatformId':settings.uniquePlatformId},settings,{upsert:true},(err,doc)=>{
            if(err){
                reject (err);
            }
            else resolve ();
        })
    });
}

function getUserSettingsByPlatformId(platformId){
    return new Promise((resolve, reject)=>{
        userSettingsSchema.findOne({'uniquePlatformId':platformId},(err,doc)=>{
            if (err){
                reject (err);
            }else{
                resolve (doc);
            }
        })
    });
}

function createUser(userParameters){
    return new Promise((resolve, reject)=>{
        userSchema.findOneAndUpdate({'uniquePlatformId':userParameters.uniquePlatformId},userParameters,{upsert:true},(err,doc)=>{
            if(err){
                reject (err);
            }
            else {
                resolve ();
            }
        })
    });

}

function getUserDetails(uniqueId){
    return new Promise((resolve,reject)=>{
        userSchema.findOne({'uniquePlatformId':uniqueId},(err,doc)=>{
            if (err){
                reject (err);
            }else{
                resolve (doc);
            }
        })
    });
}

module.exports = {
    setUserSettings,
    getUserSettingsByPlatformId,
    createUser,
    getUserDetails
};