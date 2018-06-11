/**
 * Created by Or Adar on 5/5/2018.
 */
/**
 * @swagger
 * /register:
 *  get:
 *    tags:
 *      - Registration Route
 *    description: Register a device IP
 *    parameters:
 *      - in: query
 *        name: register
 *        description: Register a device IP
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
 *            ip:
 *              type: string
 *            device:
 *              type: string
 *      500:
 *        description: server error
 */
const registrationController = require('../controllers/registrationController');

module.exports = (app)=>{
    app.get('/register',
        registrationController.register
    );
};