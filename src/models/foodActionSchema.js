/**
 * Created by Or Adar on 3/16/2018.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodActionSchema = new Schema({
    uniquePlatformId:String,
    actionDate:Date,
    amount:Number,
    status:String
});

const FoodAction = mongoose.model('FoodAction',FoodActionSchema);

module.exports = FoodAction;