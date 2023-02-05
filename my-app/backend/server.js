const express = require('express')
// import the ApolloServer class
const { ApolloServer } = require('apollo-server-express')
const path = require('path')
// bring in the authmiddleware from utils for jwt 
const { authMiddleware } = require('./utils/auth');

// bring in the typedefs and resolvers for the graphql
const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection.js');

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


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../src/build')));
  }



// create a new instance of an Apollo server with graphql schema
const startApolloServer = async ( typeDefs, resolvers ) => {
    await server.start();
    server.applyMiddleware({ app });


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
        console.log(`Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`);
    })
})

};
// call the async function to start server
startApolloServer(typeDefs, resolvers);
