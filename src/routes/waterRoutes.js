/**
 * Created by Or Adar on 4/12/2018.
 */
/**
 * @swagger
 * /waterLevel:
 *  get:
 *    tags:
 *      - Water routes
 *    description: Get the current water tank level
 *    parameters:
 *      - in: query
 *        name: getWaterLevel
 *        description: Get the current water tank level
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success get the current water tank level
 *        schema:
 *          type: string
 *      500:
 *        description: server error
 */
/**
 * @swagger
 * /waterFloatingSwitchStatus:
 *  get:
 *    tags:
 *      - Water routes
 *    description: Get the current water floating switch status
 *    parameters:
 *      - in: query
 *        name: getWaterFloatSwitchStatus
 *        description: Get the current water float switch status
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success get the current water tank level
 *        schema:
 *          type: string
 *      500:
 *        description: server error
 */
/**
 * @swagger
 * /fillUpWater:
 *  get:
 *    tags:
 *      - Water routes
 *    description: Send a fill water tank command
 *    parameters:
 *      - in: query
 *        name: fillUpWater
 *        description: send a fill water tank command to platform
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success get the current water tank level
 *        schema:
 *          type: string
 *      500:
 *        description: server error
 */
/**
 * @swagger
 * /getFullWaterDetails:
 *  get:
 *    tags:
 *      - Water routes
 *    description: Get the full details of the water device
 *    parameters:
 *      - in: query
 *        name: getFullWaterDetails
 *        description: Get the full details of the water device
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success get the details of the water device
 *        schema:
 *          type: object
 *          properties:
 *            floatSwitch:
 *              type: string
 *            levelOfWater:
 *              type: integer
 *      500:
 *        description: server error
 */
const waterController = require('../controllers/waterController');

module.exports = (app)=>{
    app.get('/waterLevel',
        waterController.sendWaterLevelCommand
    );
    app.get('/waterFloatingSwitchStatus',
        waterController.sendWaterFloatSwitchCommand
    );
    app.get('/fillUpWater',
        waterController.sendFillWaterCommand
    );
    app.get('/getFullWaterDetails',
        waterController.getFullWaterDetails
    );
};

