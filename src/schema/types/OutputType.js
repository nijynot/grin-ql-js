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

const OutputType = registerType(
  new GraphQLObjectType({
    name: 'Output',
    description: 'An output.',
    fields: () =>  ({
      outputType: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: ouput => output.output_type,
      },
      commit: {
        type: new GraphQLNonNull(GraphQLString),
      },
      spent: {
        type: new GraphQLNonNull(GraphQLBoolean),
      },
      proof: {
        type: GraphQLString,
      },
      proofHash: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: ouput => output.proof_hash,
      },
      blockHeight: {
        type: GraphQLInt,
        resolve: output => output.block_height,
      },
      merkleProof: {
        type: GraphQLString,
        resolve: output => output.merkle_proof,
      },
      mmrIndex: {
        type: GraphQLInt,
        resolve: output => output.mmr_index,
      },
    }),
  });
);

module.exports = OutputType;
