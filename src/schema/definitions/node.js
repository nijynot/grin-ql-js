const { fromGlobalId, nodeDefinitions } 'graphql-relay';

const registeredTypes = {};

function registerType(type) {
  registeredTypes[type.name] = type;
  return type;
}

const { nodeField, nodeInterface } = nodeDefinitions(
  function resolveObjectFromID(globalId, context, {rootValue}) {
    const { type, id } = fromGlobalId(globalId);
    const loader = rootValue.loaders[type];
    return (loader && loader.load(id)) || null;
  },
  function resolveGraphQLTypeFromObject(object) {
    return registeredTypes[object.constructor.name] || null;
  },
);

module.exports = {
  registerType,
  nodeField,
  nodeInterface,
};
