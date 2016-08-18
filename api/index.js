'use strict';

import express from 'express';
import bodyParser from  'body-parser';
import cors from 'cors';
import { apolloExpress } from 'apollo-server';
import { Schema, Resolvers } from './data/schema.js';
import { Mocks } from './data/mocks.js';
// import Resolvers from './data/resolvers';
import Connectors from './data/connectors';



const GRAPHQL_PORT = 8080;

var graphQLServer = express();

graphQLServer.use(cors());
graphQLServer.use('/graphql', bodyParser.json(), apolloExpress({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolvers,
  //mocks: Mocks,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));