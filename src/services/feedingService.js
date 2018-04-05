/**
 * Created by Or Adar on 4/4/2018.
 */
const platformHandler = require('../platformHandler/platformHandler');

function sendFeedCommand(){
    platformHandler.feed();
}

module.exports ={
    sendFeedCommand
};