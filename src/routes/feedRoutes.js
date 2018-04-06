/**
 * Created by Or Adar on 3/1/2018.
 */

/**
 * @swagger
 * /feedNow:
 *  get:
 *    tags:
 *      - Feeding routes
 *    description: send a live command in order to operate the feeding device
 *    parameters:
 *      - in: query
 *        name: feedNow
 *        description: operate the feeding device
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success get the amount of food of the plate
 *        schema:
 *          type: string
 *      500:
 *        description: server error
 */

const feedController = require('../controllers/feedController');
module.exports = (app)=>{
    app.get('/feedNow',
        feedController.sendFeedingCommand
    );
};
