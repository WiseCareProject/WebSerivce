/**
 * Created by Or Adar on 6/16/2018.
 */
const cameraService = require('../services/cameraService');
const platformHandler = require('../platformHandler/platformHandler');
const fs = require('fs');
function getSnapshot(req,res){
    cameraService.getSnapshot().then(data =>{
        res.send({status:"OK"});
    });
}

function showImage(req,res){
    platformHandler.resetStream();
    fs.readFile(`${__dirname}/../../image.jpg`,(err,content)=>{
        if (err){
            res.writeHead(400,{'Content-Type':'text/html'});
            res.end("no such image");
        }else{
            res.writeHead(200,{'Content-Type':'image/jpg'});
            res.end(content);
        }
    });
}


module.exports = {
    getSnapshot,
    showImage
};