const typeDefs = `
  type User {
    id: ID!
    firstname: String!
    lastname: String!
    username: String!
    gender: String!
    email: String!
    password: String!
    role: String!
    mobileVerified: Boolean
    mobile: String
    last_login: Date
    status: USERSTATUS
    message: String
    notifications String
    task: String

  }
  type UserExists {
    name: String!
    email: String!
    roles: [String]!
  }
  type LoginUser {
    password: String!
  }
  type Token {
    token: String!
  }
  type Query {
    authenticateUser_Q: [User]
    checkUserExists_Q(email:String!): [UserExists]
    loginUser_Q(email:String!,password:String!): [LoginUser]
  }
  type Mutation {
    addUser_M(name:String!,email:String!,password:String!): User
    updateUser_M(name:String!,email:String!,password:String!): User
    updateUserAdmin_M(id:String!,roles:[String!]!): User
  }
`;