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
const BlockType = require('./BlockType');

const ChainType = registerType(
  new GraphQLObjectType({
    name: 'Chain',
    fields: () => ({
      height: {
        type: GraphQLInt,
      },
      lastBlockPushed: {
        type: BlockType,
        resolve: (root, args, context) => {
          return context.grin.blocks(root.last_block_pushed);
        },
      },
      previousBlockToLast: {
        type: BlockType,
        resolve: (root, args, context) => {
          return context.grin.blocks(root.prev_block_to_last);
        },
      },
      totalDifficulty: {
        type: GraphQLInt,
        resolve: chain => chain.total_difficulty,
      },
    }),
  });
);

module.exports = ChainType;
