const checkController = require('../controllers/check.controller');

  /**
   * @swagger
   * /test:
   *  get:
   *    tags:
   *      - testing routes
   *    description: wise Care
   *    parameters:
   *      - in: query
   *        name: test
   *        description: testing
   *        required: false
   *        type: string
   *    produces:
   *      - application/json
   *    responses:
   *      200:
   *        description: if success full test
   *        schema:
   *          type: string
   *      500:
   *        description: server error
   */

module.exports = (app)=>{
  app.get('/test',
    checkController.check
  )
}
