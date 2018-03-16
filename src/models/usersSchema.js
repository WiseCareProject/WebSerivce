/**
 * Created by Or Adar on 3/16/2018.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    firstName:String,
    lastName:String,
    userName:String,
    email:String,
    registrationDate:{type:Date, default: Date.now},
    typeOfPet:String,
    uniquePlatformId:String
});

const Users = mongoose.model('UsersSchema',UsersSchema);

module.exports = Users;