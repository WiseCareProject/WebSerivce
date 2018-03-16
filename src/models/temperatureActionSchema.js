/**
 * Created by Or Adar on 3/16/2018.
 */

/**
 * Created by Or Adar on 3/16/2018.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemperatureActionSchema = new Schema({
    uniquePlatformId:String,
    actionDate:Date,
    actionType:String,
    degree:Number,
    status:String
});

const TemperatureAction = mongoose.model('TemperatureActionSchema',TemperatureActionSchema);

module.exports = TemperatureAction;