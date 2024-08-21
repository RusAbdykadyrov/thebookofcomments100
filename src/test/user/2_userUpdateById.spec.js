const { expect } = require('chai');
const { userUpdated } = require('./data');
const { userUpdateByIdQ } = require('./queries');
const gqlRequest = require('../gqlRequest');


let respData = null;
let postData = null;
let userId = null

describe('USER UPDATE BY ID', () => {
    describe('User Update BY ID - Positive test', () => {

        it('update user by ID', (done) => {
            postData = {
                query: userUpdateByIdQ,
                variables: {
                    userInput: {
                        userId: process.env.USER_ID, 
                        firstName: 'firstnameUpdated',
                        lastName: 'lastNameUpdated'
                    }
                }
            };
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body.data.userUpdateById; 
                    console.log(respData);
                    expect(respData.firstName).equal('firstnameUpdated');
                    expect(respData.lastName).equal('lastNameUpdated');
                    done();
                });
        });

    });
})