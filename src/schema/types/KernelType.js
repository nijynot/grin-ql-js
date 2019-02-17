const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull,
} = require('graphql');
const {
  globalIdField,
} = require('graphql-relay');

const { registerType } = require('../definitions/node');

const KernelType = registerType(
  new GraphQLObjectType({
    name: 'Kernel',
    fields: () => ({
      features: {
        type: new GraphQLNonNull(GraphQLString),
      },
      fee: {
        type: new GraphQLNonNull(GraphQLInt),
      },
      lockHeight: {
        type: new GraphQLNonNull(GraphQLInt),
        resolve: kernel => kernel.lock_height,
      },
      excess: {
        type: new GraphQLNonNull(GraphQLString),
      },
      excessSig: {
        type: new GraphQLNonNull(GraphQLString),
      },
    }),
  });
);

module.exports = KernelType;
