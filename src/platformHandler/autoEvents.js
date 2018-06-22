/**
 * Created by Or Adar on 4/15/2018.
 */
const schedule = require('node-schedule');
const platformHandler = require('../platformHandler/platformHandler');
let feedingTimeObject = {
    hour:0,
    minute:0,
};
let isAuto = false;
let feedingSchedule=null;

let waterInterval;
let temperatureInterval;

function updateFeedingTimeObjectAndAutoMode(userSettings){

    let date = new Date(feedingTimeObject.hour = userSettings.feedingTime[0]);
   feedingTimeObject.hour = (date.getHours() - 3);
   feedingTimeObject.minute = date.getMinutes();
   isAuto = userSettings.isAutomated;
   if (isAuto){
       if(feedingSchedule){
           feedingSchedule.cancel();
       }
       feedingSchedule = schedule.scheduleJob(`${feedingTimeObject.minute} ${feedingTimeObject.hour} * * *`,()=>{
           platformHandler.feed();
           return;
       });
       waterInterval = setInterval(async ()=>{
           let res = await platformHandler.waterTankFloatStatusForAuto();
           if (res && res.amount){
               if (res.amount === "EMPTY"){
                   platformHandler.fillWaterTank();
               }
           }
       },300000);
       temperatureInterval = setInterval(async ()=>{
          // let res = await platformHandler.getTemperature();
          // console.log(res);
       },500000);
   }
   else{
       feedingSchedule.cancel();
       feedingSchedule = null;
       clearInterval(waterInterval);
       clearInterval(temperatureInterval);
   }
}



module.exports  = {
    updateFeedingTimeObjectAndAutoMode
};
