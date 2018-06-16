/**
 * Created by Or Adar on 6/16/2018.
 */
const platformHandler = require('../platformHandler/platformHandler');

function getSnapshot(){
    return new Promise((resolve,reject)=>{
      platformHandler.getSnapshot().then(data=>{
          resolve();
      })
    });
}

module.exports = {
    getSnapshot
};