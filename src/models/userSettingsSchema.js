/**
 * Created by Or Adar on 3/16/2018.
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSettingsSchema = new Schema({
    uniquePlatformId:String,
    isAutomated:Boolean,
    maxTemperature:Number,
    lowTemperature:Number,
    defaultAmountOfFood:Number,
    feedingTime:[Date]

});

const UserSettings = mongoose.model('UserSettings',UserSettingsSchema);

module.exports = UserSettings;