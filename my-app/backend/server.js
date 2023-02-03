const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const path = require('path')
// bring in the authmiddleware from utils for jwt 
const { authMiddleware } = require('./utils/auth')

// bring in the typedefs and resolvers for the graphql
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express()
// create a new instance of apolloserver for the typedefs resolvers and context
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create a new instance of an Apollo server with graphql schema
const startApolloServer = async (typeDefs, resolvers ) => {
    await server.start();
    server.applyMiddleware({ app })
}

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`)
    })
})

// call the asyn function to start server
startApolloServer(typeDefs, resolvers);
