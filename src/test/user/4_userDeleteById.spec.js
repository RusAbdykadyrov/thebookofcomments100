const { expect } = require('chai');
const { user } = require('./data')
const { userDellByIdQ} = require('./queries')
const gqlRequest = require('../gqlRequest');
const { query } = require('express');


let respData = null
let postData = null

describe('USER DELETE BY ID', () => {
    describe('User delete by id - positeve test', () => {
        it('Delete user ID', (done) => {
            postData = {
                query: userDellByIdQ,
                variables: {
                    userId: process.env.USER_ID
                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(res)
                    respData = res.body.data.userDelById
                    console.log(respData)
                   // expect(postData).to.be.undefined;
                //    expect(respData).to.have.property('success');
                //    expect(respData.success).to.be.null;
                done()

                })
        })
    })
})
