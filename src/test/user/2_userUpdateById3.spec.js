const { expect } = require('chai');
const { user } = require('./data');
const { userUpdateByIdQ, userCreateQ } = require('./queries');
const gqlRequest = require('../gqlRequest');
const mongoose = require('mongoose');

let respData = null;
let postData = null;
let userId = null;

describe('USER UPDATE BY ID', () => {
   
    before('Create user for update test', (done) => {
        postData = {
            query: userCreateQ,
            variables: user
        };
        gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                userId = res.body.data.userCreate._id; 
                console.log('Created User ID:', userId);
                done();
            });
            describe('User Update BY ID - Positive test', () => {

                it('user update by ID', (done) => {
                    postData = {
                        query: userUpdateByIdQ,
                        variables: {
                            _id: userId,  
                            firstName: "UpdatedFirstName",
                            lastName: "UpdatedLastName"
                
                        }
                    };
        
                  
                        });
                });
            });
        });
 