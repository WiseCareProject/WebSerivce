/**
 * Created by Or Adar on 5/28/2018.
 */
/**
 * @swagger
 * /turnOnCooling:
 *  get:
 *    tags:
 *      - Environment routes
 *    description: Turn on cooling device
 *    parameters:
 *      - in: query
 *        name: turnOnCooling
 *        description: Turn on cooling device
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success turn on the cooling device
 *        schema:
 *          type: object
 *          properties:
 *            status:
 *              type: string
 *      500:
 *        description: server error
 */
/**
 * @swagger
 * /turnOffCooling:
 *  get:
 *    tags:
 *      - Environment routes
 *    description: Turn off cooling device
 *    parameters:
 *      - in: query
 *        name: turnOffCooling
 *        description: Turn off cooling device
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success turn off the cooling device
 *        schema:
 *          type: object
 *          properties:
 *            status:
 *              type: string
 *      500:
 *        description: server error
 */
/**
 * @swagger
 * /getTemperature:
 *  get:
 *    tags:
 *      - Environment routes
 *    description: get the temperature
 *    parameters:
 *      - in: query
 *        name: getTemperature
 *        description: get the temperature
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success get the temperature of the kennel
 *        schema:
 *          type: object
 *          properties:
 *            temp:
 *              type: string
 *      500:
 *        description: server error
 */
/**
 * @swagger
 * /turnOnHeat:
 *  get:
 *    tags:
 *      - Environment routes
 *    description: Turn on the heating blanket
 *    parameters:
 *      - in: query
 *        name: turnOnHeat
 *        description: Turn on the heating blanket
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success turn on the heating blanket
 *        schema:
 *          type: object
 *          properties:
 *            status:
 *              type: string
 *      500:
 *        description: server error
 */
/**
 * @swagger
 * /turnOffHeat:
 *  get:
 *    tags:
 *      - Environment routes
 *    description: Turn off the heating blanket
 *    parameters:
 *      - in: query
 *        name: turnOffHeat
 *        description: Turn off the heating blanket
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success turn off the heating blanket
 *        schema:
 *          type: object
 *          properties:
 *            status:
 *              type: string
 *      500:
 *        description: server error
 */

const environmentController = require('../controllers/enviromentController');

module.exports = (app) =>{
    app.get('/turnOnCooling',
        environmentController.sendCoolingCommand
    );
    app.get('/turnoffCooling',
        environmentController.sendOffCoolingCommand
    );
    app.get('/getTemperature',
        environmentController.getTemperatureCommand
    );
    app.get('/turnOnHeat',
        environmentController.sendHeatCommand
    );
    app.get('/turnOffHeat',
        environmentController.sendOffHeatCommand
    );
};