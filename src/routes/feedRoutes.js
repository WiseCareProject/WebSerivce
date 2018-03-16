/**
 * Created by Or Adar on 3/1/2018.
 */

const feedController = require('../controllers/feedController');
module.exports = (app)=>{
    app.get('/feedNow',
        feedController.feedNow
    );
};
