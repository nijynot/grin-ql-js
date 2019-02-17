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

const HeaderType = registerType(
  new GraphQLObjectType({
    name: 'Header',
    fields: () => ({
      hash: {
        type: new GraphQLNonNull(GraphQLString),
      },
      version: {
        type: new GraphQLNonNull(GraphQLInt),
      },
      height: {
        type: new GraphQLNonNull(GraphQLInt),
      },
      previous: {
        type: new GraphQLNonNull(GraphQLString),
      },
      previousRoot: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: header => header.prev_root,
      },
      timestamp: {
        type: new GraphQLNonNull(GraphQLString),
      },
      outputRoot: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: header => header.output_root,
      },
      kernelRoot: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: header => header.kernel_root,
      },
      nonce: {
        type: new GraphQLNonNull(GraphQLInt),
      },
      edgeBits: {
        type: new GraphQLNonNull(GraphQLInt),
        resolve: header => header.edge_bits,
      },
      cuckooSolution: {
        type: new GraphQLList(GraphQLInt),
        resolve: header => header.cuckoo_solution,
      },
      totalDifficulty: {
        type: new GraphQLNonNull(GraphQLInt),
        resolve: header => header.total_difficulty,
      },
      secondaryScaling: {
        type: new GraphQLNonNull(GraphQLInt),
        resolve: header => header.secondary_scaling,
      },
      totalKernelOffset: {
        type: GraphQLString,
        resolve: header => header.total_kernel_offset,
      },
    }),
  });
);

module.exports = HeaderType;
