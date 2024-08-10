const { expect } = require('chai');
const { userCreateQ } = require('./queries1')
const { user } = require('./data1')
const gqlRequest1 = require('./gqlRequest1')

let respData = null
let postData = null


describe('USER CREATE', () => {
    describe('USER CREATE - POSITIVE TEST', () => {
        it('user create all fields', (done) => {

            postData = {
                query: userCreateQ,
                variables: user
            }

            gqlRequest1(postData)
            .expect(200)
            .end((err, resp) => {
                if (err) return done(err)
                respData = resp.body
                console.log(respData); 
                
                // expect(respData).eq()
                
                done()

            })
        })

    })
})