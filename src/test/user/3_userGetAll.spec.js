const { expect } = require('chai');
const {userGetAllQ} = require('./queries');
const { user } = require('./data');
const gqlRequest = require('../gqlRequest');


let respData = null
let postData = null


describe('USER CGET ALL ', () => {

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
                    
                    expect(respData.length).eq()
                    expect(respData).to.be.an('array').that.is.empty;
                    // expect(respData.lastName).eq(user.userInput.lastName)
                    done()

                })
            })
        })
    })