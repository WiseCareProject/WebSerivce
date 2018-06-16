/**
 * Created by Or Adar on 6/16/2018.
 */
const cameraController = require('../controllers/cameraController');

/**
 * @swagger
 * /getSnapshot:
 *  get:
 *    tags:
 *      - Camera Route
 *    description: get snapshot from the camera
 *    parameters:
 *      - in: query
 *        name: getSnapshot
 *        description: get snapshot from the camera
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success get the picture
 *        schema:
 *          type: object
 *          properties:
 *            image:
 *              type: object
 *
 *      500:
 *        description: server error
 */
/**
 * @swagger
 * /showImage:
 *  get:
 *    tags:
 *      - Camera Route
 *    description: show the image taken by the camera
 *    parameters:
 *      - in: query
 *        name: showImage
 *        description: show the image taken by the camera
 *        required: false
 *        type: string
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: if success get the picture
 *        schema:
 *          type: object
 *          properties:
 *            image:
 *              type: object
 *
 *      500:
 *        description: server error
 */

module.exports = (app) =>{
  app.get('/getSnapshot',
      cameraController.getSnapshot);

    app.get('/showImage',
        cameraController.showImage);
};

