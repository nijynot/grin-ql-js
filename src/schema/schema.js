const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
  }),
});

const schema = new GraphQLSchema({
  query: queryType,
  // mutation: mutationType,
});
