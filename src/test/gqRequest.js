const request = require('supertest')
const url = 'http://localhost:5000'

function gqRequest(postData) {
    return request(url).post('/').send(postData)

}
module.exports = gqRequest