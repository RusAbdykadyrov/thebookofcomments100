const { expect } = require('chai');
const {userGetAllQ} = require('./queries');
const { usersGetAll } = require('./data');
const gqlRequest = require('../gqlRequest');


let respData = null
let postData = null


describe('USER GET ALL ', () => {
    describe('USER  GET ALL - POSITIVE TEST', () => {
        it('user get all', (done) => {
            postData ={
                query: userGetAllQ,
                variables: {
                    amount: null
                  }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.usersGetAll
                    console.log(respData); 
                    
                    //expect(respData.length).eq(3)
                    expect(respData).to.be.an('array').that.is.not.empty;
                    // expect(respData.lastName).eq(user.userInput.lastName)
                    done()

                })
            })
        })
    })