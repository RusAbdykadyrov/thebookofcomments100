const userCreateQ = `mutation UserCreate($userInput: UserFields) {
    UserCreate(userInput: $userInput) {
        firstName
        lastName 
        _id
    }
}`

const userGetByIdQ = `query UserGetById($userId: ID!) {
    userGetById(userId: $userId) {
      lastName
      firstName
      _id
    }
  }`
  module.exports = { userCreateQ, userGetByIdQ};