const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        firstName: String
        lastName: String
        email: String
        password: String
        booking: [Booking]
        pet: [Pet]
    }

    type Pet {
        _id: ID!
        petOwner: String
        petName: String
        petAge: Int
        petSex: String
        petAnimalType: String
        petBreed: String
        booking: [Booking]
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
        user (userId: ID!): User
        users: [User]!
        pet (petId: ID!): Pet
        booking (bookingId: ID!): Booking
        bookings (bookingAuthor: String!): [Booking]

    }



    type Mutation {
        login(email: String!, password: String!):Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addBooking(bookingReason: String!, bookingAuthor: String!): Booking
        removeBooking(bookingId : ID!): Booking
     }
`;


module.exports = typeDefs;