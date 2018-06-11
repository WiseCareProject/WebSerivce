/**
 * Created by Or Adar on 3/16/2018.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetLocationActionSchema = new Schema({
    uniquePlatformId:String,
    actionDate:Date,
    isLocate:Boolean,
    actionTimeStart:Date,
    actionTimeEnd:Date
});

const PetLocationAction = mongoose.model('PetLocationAction',PetLocationActionSchema);

module.exports = PetLocationAction;