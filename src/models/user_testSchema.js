/**
 * Created by Or Adar on 3/3/2018.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTestSchema = new Schema({
   name:String
});

const UserTest = mongoose.model('user_test',UserTestSchema);

module.exports = UserTest;