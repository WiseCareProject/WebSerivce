const platformHandler = require('./../platformHandler/platformHandler');


module.exports = {
  check:(req,res)=>{
    res.status(200).json({status:'good'});
  }
};
