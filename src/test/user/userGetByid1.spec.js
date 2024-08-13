const { expect } = require('chai');
const { user } = require('./data');
const { userCreateQ, userGetByidQ } = require('./queries');
const gqlRequest = require('../gqlRequest')

let respData = null
let postData = null

describe('USER GET BY ID', () => {
    describe('USER GET BY ID- POSITIVE TEST', () => {
        it('USER GET BY ID', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: {
                    "userId": 'knknknknknknkknnknknknknk'
                  }
}
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetByIdQ
                    console.log(respData);

                    expect(respData._id).eq()
                    done()
                })
        })
    })
    describe('USER GET BY ID - NEGATIVE TEST', () => {
    })
})
