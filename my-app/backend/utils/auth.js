const jwt = require('jsonwebtoken');

const secret = 'supersecretshhhhh';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        // Allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;
        // if true manipulate the token with string methods
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }  
        // if false return request
        if (!token) {
            return req;
        }
        // try block for system errors
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration});
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;

    },

    signToken: function ( { email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign( { data: payload }, secret, { expiresIn: expiration})
    }
}