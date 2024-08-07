
const { expect } = require('chai')
const {userCreateQ} = require('./queries')
const{user} = require('./data')
const gqRequest = require('../gqRequest')



let respData = null
let postData = null

describe('USER CREATE', () => {
    describe('USER CREATE - POSITIVE TEST', () => {
        it('user create all fields', () => {
            postData ={
                query: userCreateQ,
                variables: user
            }
            gqRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data
                   // expect(respData).eq()
                    console.log(respData)
                    done()

                })

        })
        it('user create all fields', () => {
    })
    })

    describe('USER CREATE - NEGATIVE TEST', () => {
        it('user create all fields', () => {

        })
        it('user create all fields', () => {
        
        
        })
        it('user create all fields', () => {

        })
        it('user create all fields', () => {


            
        })
    })
})
