const cors = require('cors');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./schema');
const models = require('./models');
const app = express();
const sequelize = require('sequelize');

// ****** allow cross-origin requests code START ****** //
//app.use(cors()); // uncomment this to enable all CORS and delete cors(corsOptions) in below code
var allowedOrigins = process.env.allowedOrigins.split(',');
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
// ****** allow cross-origin requests code END ****** //

const server = new ApolloServer({
  schema,
  context: {models}
});

server.applyMiddleware({
  app,
  path: '/graphql'
});

models.sequelize.sync().then(async () => {
  app.listen({
    port: 8000
  }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
  });
});