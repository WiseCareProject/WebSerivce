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
 */
/**
 * @swagger
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
/**
 * @swagger
 * /createUser:
 *  post:
 *    tags:
 *      - user routes
 *    summary: Create new user
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: createUser
 *        description: Create new user
 *        schema:
 *          type: object
 *          required:
 *            - uniquePlatformId
 *          properties:
 *            uniquePlatformId:
 *              type: string
 *            firstName:
 *              type: string
 *            lastName:
 *              type: string
 *            userName:
 *              type: string
 *            password:
 *              type: string
 *            email:
 *              type: string
 *            typeOfPet:
 *              type: string
 *
 *    responses:
 *      200:
 *        description: if success get the user details
 *        schema:
 *          type: object
 *          properties:
 *            uniquePlatformId:
 *              type: string
 *            firstName:
 *              type: string
 *            lastName:
 *              type: string
 *            userName:
 *              type: string
 *            password:
 *              type: string
 *            email:
 *              type: string
 *            registrationDate:
 *              type: object
 *            typeOfPet:
 *              type: string
 *
 *      400:
 *        description: server error
 */
/**
 * @swagger
 * /getUserDetails:
 *  post:
 *    tags:
 *      - user routes
 *    summary: Get user details
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: get user details
 *        description: get the user registration details
 *        schema:
 *          type: object
 *          required:
 *            - uniquePlatformId
 *          properties:
 *            uniquePlatformId:
 *              type: string
 *
 *    responses:
 *      200:
 *        description: get success object
 *      400:
 *        description: user creation failed
 */

module.exports = (app)=>{
    app.post('/setUserSettings',
        userController.setUserSettings
    );
    app.post('/getUserSettings',
        userController.getUserSettingsByPlatformId
    );

    app.post('/createUser',
        userController.createUser
    );
    app.post('/getUserDetails',
        userController.getUserDetails
    );
};