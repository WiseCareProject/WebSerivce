/**
 * Created by Or Adar on 3/3/2018.
 */
const assert = require('assert');
const UserTest = require('../src/models/user_testSchema');

describe('Creating records',()=>{
    it('saves a user',(done)=>{
        const gal = new UserTest({name:'Gal'});
        gal.save().then(()=>{
            assert(!gal.isNew);
            done();
        });
    });
});