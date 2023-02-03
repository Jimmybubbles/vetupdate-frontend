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
        petName: String
        petAge: Int
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
        user(firstName: String!, lastName: String!): User
        booking(bookingAuthor: String!, bookingReason: String!): Booking
        bookings: [Booking]
    }

     type Mutation {
        login(email: String!, password: String!):Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addBooking(bookingReason: String!, bookingAuthor: String!): Booking
        removeBooking(bookingId : ID!): Booking
     }
`;


module.exports = typeDefs;