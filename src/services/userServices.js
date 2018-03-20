/**
 * Created by Or Adar on 3/16/2018.
 */
const userSchema = require('../models/usersSchema');
const userSettingsSchema = require('../models/userSettingsSchema');

function setUserSettings(settings){
    return new Promise((resolve,reject)=>{
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

module.exports = {
    setUserSettings,
    getUserSettingsByPlatformId,
    createUser
};