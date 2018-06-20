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
 *        description: if success feeding the pet
 *        schema:
 *          type: string
 *      500:
 *        description: server error
 */
/**
 * @swagger
 * /getTankAmount:
 *  get:
 *    tags:
 *      - Feeding routes
 *    description: Get the current tank amount of food
 *    parameters:
 *      - in: query
 *        name: getTankAmount
 *        description: get the current tank amount
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success get the amount of food of the tank
 *        schema:
 *          type: string
 *      500:
 *        description: server error
 */
/**
 * @swagger
 * /getPlateAmount:
 *  get:
 *    tags:
 *      - Feeding routes
 *    description: Get the current tank amount of food
 *    parameters:
 *      - in: query
 *        name: getPlateAmount
 *        description: get the current plate amount
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
/**
 * @swagger
 * /getFullDetails:
 *  get:
 *    tags:
 *      - Feeding routes
 *    description: Get the full details amount the food device
 *    parameters:
 *      - in: query
 *        name: getFullDetails
 *        description: get the full details the food device
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success get the amount of food of the plate
 *        schema:
 *          type: object
 *          properties:
 *            tankAmount:
 *              type: integer
 *            plateAmount:
 *              type: integer
 *      500:
 *        description: server error
 */
/**
 * @swagger
 * /stopServo:
 *  get:
 *    tags:
 *      - Feeding routes
 *    description: stop servo
 *    parameters:
 *      - in: query
 *        name: stop Servo
 *        description: stop servo
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success stop the servo
 *        schema:
 *          type: object
 *          properties:
 *            status:
 *              type: string
 *      500:
 *        description: server error
 */
const feedController = require('../controllers/feedController');
module.exports = (app)=>{
    app.get('/feedNow',
        feedController.sendFeedingCommand
    );
    app.get('/getTankAmount',
        feedController.getTankAmountCommand
    );
    app.get('/getPlateAmount',
        feedController.getPlateAmountCommand
    );
    app.get('/getFullDetails',
        feedController.getFullDetails
    );
    app.get('/stopServo',
        feedController.stopServo
    );
};
