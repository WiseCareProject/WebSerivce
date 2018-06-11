/**
 * Created by Or Adar on 4/6/2018.
 */
const drinkingService = require('../services/drinkingService');

function fillTheWaterTank(req,res){
    drinkingService.fillUpWaterTank();
    res.status(200).send("fill water tank command accepted");
}

module.exports = {
    fillTheWaterTank
};
