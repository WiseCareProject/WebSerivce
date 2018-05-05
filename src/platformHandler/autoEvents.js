/**
 * Created by Or Adar on 4/15/2018.
 */
const schedule = require('node-schedule');
const platformHandler = require('../platformHandler/platformHandler');
let feedingTimeObject = {
    hour:19,
    minute:48,
};
let isAuto = false;
let feedingSchedule;

function updateFeedingTimeObjectAndAutoMode(userSettings){

    let date = new Date(feedingTimeObject.hour = userSettings.feedingTime[0]);
   feedingTimeObject.hour = date.getHours();
   feedingTimeObject.minute = date.getMinutes();
   isAuto = userSettings.isAutomated;
   feedingSchedule.cancel();
   triggerAutoFunctions();
}

function triggerAutoFunctions(){
    feedingSchedule = schedule.scheduleJob(feedingTimeObject, async function () {
        if(isAuto){
           let result = await platformHandler.feed();
           console.log("Just automated fed you pet "+result)
        }
    });
}


module.exports  = {
    triggerAutoFunctions,
    updateFeedingTimeObjectAndAutoMode
};
