const express = require('express');
const port = 8081;
const app = express();
const mongoose = require('mongoose');
const config = require('./config/config');

mongoose.connect(config.dbUrl).catch((err)=>{
  console.log(err);
});

app.get('/health-check',(req,res)=>{
	res.status(200).json({message:'OK'})
});


app.use(express.static('public'));

require('./config/swagger')(app,()=>{
  require('./src/routes/check.route')(app);
  require('./src/routes/feedRoutes')(app);
  require('./src/routes/userRoutes')(app);
  app.listen(port, (err) => {
    if (err){
      throw err;
      }else{
      console.log(`Server running at ${port}`);
    }
  });
});
