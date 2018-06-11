const checkController = require('../controllers/check.controller');

  /**
   * @swagger
   * /healthCheck:
   *  get:
   *    tags:
   *      - Device Status
   *    description: Get the devices status
   *    parameters:
   *      - in: query
   *        name: healthCheck
   *        description: Get the devices status
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
   *            foodDevice:
   *              type: string
   *            waterDevice:
   *              type: string
   *            environmentDevice:
   *              type: string
   *
   *      500:
   *        description: server error
   */

module.exports = (app)=>{
  app.get('/healthCheck',
    checkController.check
  )
};
