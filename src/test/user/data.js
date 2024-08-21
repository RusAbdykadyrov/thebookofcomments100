const user = {
    userInput: {
  
            firstName: "firstName",
            lastName: "lastName"

    }
}
const userUpdated = {
    
        userInput: {
          firstName: "firstnameUpdated",
          lastName: "lastNameUpdated",
          userId: process.env.USER_ID
        
      }
    }

module.exports = { user, userUpdated}
