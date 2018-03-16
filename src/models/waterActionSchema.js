/**
 * Created by Or Adar on 3/16/2018.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WaterActionSchema = new Schema({
    uniquePlatformId:String,
    actionDate:Date,
    amount:Number,
    status:String
});

const WaterAction = mongoose.model('WaterAction',WaterActionSchema);

module.exports = WaterAction;