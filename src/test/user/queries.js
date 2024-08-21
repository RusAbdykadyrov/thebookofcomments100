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
const userUpdateByIdQ = `mutation UserUpdateById($userInput: UserFields) {
  userUpdateById(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`

const userGetAllQ = `query UsersGetAll($amount: Int) {
  usersGetAll(amount: $amount) {
    lastName
    firstName
    _id
  }
}`

  module.exports = { userCreateQ, userGetByIdQ, userUpdateByIdQ, userGetAllQ};