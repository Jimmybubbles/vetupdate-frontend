const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        username: String
        email: String
        password: String
        pet: String!
    }

    type Pet {
        _id: ID!
        petOwner: String
        petname: String
        petAge: Number
        petSex: Boolean
        petAnimalType: String
        petBreed: String
     }



     type auth {
        token: ID!
        user: User
     }

     type Query {
        users: [User]
        user(username: String!): User
        
        

     }

     type Mutations {
        addUser()
        addBooking()
        deleteBooking()
     }
`

