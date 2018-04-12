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
 *        name: getPlateAmount
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
const waterController = require('../controllers/waterController');

module.exports = (app)=>{
    app.get('/waterLevel',
        waterController.sendWaterLevelCommand
    );
};

