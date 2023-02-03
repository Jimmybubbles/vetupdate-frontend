const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        firstName: String
        lastName: String
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

    type Booking {
        _id: ID!
        bookingReason: String
        bookingAuthor: String
     }

    type Auth {
        token: ID!
        user: User
    }

     type Query {
        users: [User]
        user(username: String!): User
        booking(bookingAuthor: String!, bookingReason: String!): booking
    }

     type Mutations {
        login(email: String!, password: String!):Auth
        addUser(firstName: String!, lastName:String!, email: String!, password: String!): Auth
        addBooking(bookingReason: String!, bookingAuthor: String!): booking
        
     }
`

