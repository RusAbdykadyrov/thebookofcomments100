const userCreateQ = `mutation UserCreate($userInput: UserFields) {
    userCreate(userInput: $userInput) {
        firstName
        lastName 
        _id
    }
}`
//module.exports = { userCreateQ};
const userGetByIdQ = `query UserGetById($userId: ID!) {
  userGetById(userId: $userId) {
    lastName
    firstName
    _id
  }
}`
  module.exports = { userCreateQ, userGetByIdQ};