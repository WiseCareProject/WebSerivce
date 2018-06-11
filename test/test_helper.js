/**
 * Created by Or Adar on 3/3/2018.
 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');

before((done)=>{
    mongoose.connection.once('open',()=>{
       done();
    }).on('error',(err)=>{
        console.error('error: '+err);
    });
});


beforeEach((done)=>{
   mongoose.connection.collections.user_tests.drop(()=>{
       done();
   });
});