const { expect} = require ('mocha');
const {user} = require ('./data')
const {userDelById, userUpdateByIdQ} = require ('./queries')
const gqlRequest = require('../gqlRequest');
const { query } = require('express');


let respData = null
let postData = null

describe ('USER DELETE BY ID', () => {
    describe ('User delete by id - positeve test', () => {
        it ('Delete user ID', (done) =>{
             postData = {
                query: userUpdateByIdQ,
                variables: {
                    userId: process.env.USER_ID
                }            
             }
gqlRequest(postData)
.expect(200)
.end((err, res) => {
if(err) return done(res)
respData = res.body.data.usersDelById
console.log(respData)


 done()

})



        })
    })
})
