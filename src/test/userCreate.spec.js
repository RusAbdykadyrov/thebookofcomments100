
const { expect } = require('chai');
const { userCreateQ } = require('./user/queries');
const { user } = require('./user/data');
const gqlRequest = require('./user/gqlRequest');

let respData = null
let postData = null

describe('USER CREATE', () => {
    describe('USER CREATE - POSITIVE TEST', () => {
        it('user create all fields', (done) => {
            postData ={
                query: userCreateQ,
                variables: user
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body
                    // expect(respData).eq()
                    console.log(respData)
                    done()

                })

        })

    })
})

    // describe('USER CREATE - NEGATIVE TEST', () => {
    //     it('user create all fields', () => {

    //     })
    //     it('user create all fields', () => {
        
        
    //     })
    //     it('user create all fields', () => {

    //     })
    //     it('user create all fields', () => {


            
    //     })
    // })

