import { gql } from '#apollo/client';

export const QUERY_USERS = gql`
    query allUsers {
        User {
            _id
            firstName
            lastName
            petName
        }
    }

`;

export const QUERY_SINGLE_USER = gql`

    query singleUser($userId: ID!) {
        user(userId: $userID) {
            _id
            firstName
            lastName
            petName
        }
    }

`