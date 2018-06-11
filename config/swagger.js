const swagger_jsdoc = require('swagger-jsdoc');
swagger = require('swagger-tools');

module.exports = (app,next) =>{
  let initSwagger = swagger_jsdoc({
    swaggerDefinition:{
      info:{
        title:"Wise Care Service",
        version: require(__dirname+'/../package.json').version,
        description:''
      },
      basePath: '/'
    },
    apis:[
      './src/routes/*.js'
    ]
  });
  app.get('/swagger.json',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.send(initSwagger);
  });

  swagger.initializeMiddleware(initSwagger,(middleware)=>{
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerValidator());
    next();
  });
};
