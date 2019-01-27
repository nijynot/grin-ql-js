const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');
const {
  globalIdField,
} = require('graphql-relay');

const { registerType } = require('../definitions/node');
const HeaderType = require('./HeaderType');
const OutputType = require('./OutputType');
const KernelType = require('./KernelType');

const BlockType = registerType(
  new GraphQLObjectType({
    name: 'Block',
    fields: ({
      header: {
        type: HeaderType,
      },
      inputs: {
        type: new GraphQLList(GraphQLString),
      },
      outputs: {
        type: new GraphQLList(OutputType),
      },
      kernels: {
        type: new GraphQLList(KernelType),
      },
    }),
  });
);

module.exports = BlockType;
