/**
 * Created by Or Adar on 3/16/2018.
 */

const userController = require('../controllers/userController');

/**
 * @swagger
 * /setUserSettings:
 *  post:
 *    tags:
 *      - user routes
 *    summary: set the user settings
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: userSettings
 *        description: set the user settings.
 *        schema:
 *          type: object
 *          required:
 *            - uniquePlatformId
 *          properties:
 *            uniquePlatformId:
 *              type: string
 *            isAutomated:
 *              type: boolean
 *            maxTemperature:
 *              type: number
 *            lowTemperature:
 *              type: number
 *            defaultAmountOfFood:
 *              type: number
 *            feedingTime:
 *              type: array
 *    responses:
 *      200:
 *        description: if success set the user settings
 *      500:
 *        description: server error
 * /getUserSettings:
 *  post:
 *    tags:
 *      - user routes
 *    summary: get the user settings by platform unique id
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: getUserSettings
 *        description: get the user settings by unique platform id.
 *        schema:
 *          type: object
 *          required:
 *            - uniquePlatformId
 *          properties:
 *            uniquePlatformId:
 *              type: string
 *    responses:
 *      200:
 *        description: if success get the user settings
 *        schema:
 *          type: object
 *          properties:
 *            uniquePlatformId:
 *              type: string
 *            isAutomated:
 *              type: boolean
 *            maxTemperature:
 *              type: number
 *            lowTemperature:
 *              type: number
 *            defaultAmountOfFood:
 *              type: number
 *            feedingTime:
 *              type: array
 *      500:
 *        description: server error
 */

module.exports = (app)=>{
    app.post('/setUserSettings',
        userController.setUserSettings
    );
    app.post('/getUserSettings',
        userController.getUserSettingsByPlatformId
    );
};