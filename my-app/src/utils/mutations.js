import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login(
    $email: String!
    $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
         _id
         
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser( 
    $firstName: String! 
    $lastName: String!
    $petName: String!
    $email: String!
    $password: String!) 
      {
        addUser(
        firstName: $firstName
        lastName: $lastName
        petName: $petName
        email: $email
        password: $password
        ) {
          token
          user {
            _id
            


      }
    }
  }
`;




export const ADD_BOOKING = gql`
  mutation addBooking(
    $bookingReason: String! 
    $bookingAuthor: String!
    $createdAt: Date!
    ) {
    addBooking(
      bookingReason: $bookingReason 
      bookingAuthor: $bookingAuthor
      createdAt: $createdAt
    ) {
      _id
      bookingReason
      bookingAuthor
      createdAt
    }
  }
`;

