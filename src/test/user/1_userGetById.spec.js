const { expect } = require('chai');
const { user } = require('./data');
const { userGetByIdQ, userCreateQ } = require('./queries');
const gqlRequest = require('../gqlRequest')

let respData = null
let postData = null
let userId = null

describe('USER GET BY ID', () => {
    describe('USER GET BY ID - POSITIVE TEST', () => {
        before('user create', (done) => {
            postData = {
                query: userCreateQ,
                variables: {
                    userId: process.env.USER_ID
                }
}
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    userId= res.body.data.userCreateId
                    console.log(respData)

                    expect(respData.firstName).eq(user.userInput.firstName)
                    // expect(respData.firstName).eq(user. userInput.firstName);
                    expect(respData.lastName).eq(user.userInput.lastName);
                   
                    done()
                })
            })
//         it('user get by id', (done) => {
//             postData = {
//                 query: userGetByIdQ,
//                 variables: {
//                     userId: userId
//                   }
// }
//             gqlRequest(postData)
//                 .expect(200)
//                 .end((err, res) => {
//                     if (err) return done(err)
//                     respData = res.body.data.userGetById
//                     console.log(respData);

//                     // expect(respData._id).eq('66bba18c17cfd8676255104a')
//                     // expect(respData.firstName).eq(user. userInput.firstName);
//                     // expect(respData.lastName).eq('testLastName');
                   
//                     done()
//                 })
        })
    })
    //describe('USER GET BY ID - NEGATIVE TEST', () => {
    //})
