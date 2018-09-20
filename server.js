
var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

// Graphql schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
var root = {
    message: () => "Haaaaaaa!"
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server now running on localhost:4000/'))
