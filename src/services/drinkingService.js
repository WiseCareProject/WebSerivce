/**
 * Created by Or Adar on 4/6/2018.
 */
const platformHandler = require('../platformHandler/platformHandler');

function fillUpWaterTank(){
    platformHandler.fillWaterTank();
}

module.exports = {
  fillUpWaterTank
};