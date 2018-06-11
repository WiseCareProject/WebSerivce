/**
 * Created by Or Adar on 3/16/2018.
 */

/**
 * Created by Or Adar on 3/16/2018.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleFoodActionSchema = new Schema({
    uniquePlatformId:String,
    actionDate:Date,
    amount:Number,
    timeOfDay:Date
});

const ScheduleFoodAction = mongoose.model('ScheduleFoodAction',ScheduleFoodActionSchema);

module.exports = ScheduleFoodAction;