const checkService = require('../services/checkService');

async function check(req,res){
  let devicesObject = await checkService.checkStatusOfDevices();
  if (devicesObject){
    
    res.status(200).json(JSON.stringify(devicesObject));
  }else{
    res.status(410).send("Error");
  }
}

module.exports = {
  check
};

//created by Or