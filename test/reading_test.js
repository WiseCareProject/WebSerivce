/**
 * Created by Or Adar on 3/3/2018.
 */
const assert = require('assert');
const UserTest = require('../src/models/user_testSchema');

describe('Reading user out of the database',()=>{

    beforeEach((done)=>{
       gal = new UserTest({name: 'Gal'});
       gal.save().then(()=>done());
    });

    it('find all users with the name of gal',(done)=>{
        UserTest.find({name:'Gal'}).then((users)=>{
            console.log(users);
            done();
        });
    });
});
