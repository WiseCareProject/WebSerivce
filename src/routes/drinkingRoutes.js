/**
 * Created by Or Adar on 4/6/2018.
 */

const drinkingController = require('../controllers/drinkingController');

module.exports = (app) =>{
    app.get('/drinkNow',
    drinkingController.fillTheWaterTank
    );
};