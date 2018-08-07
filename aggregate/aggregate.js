const platform = require('../../../');

platform.core.node({
  path: '/mongo-db/aggregate',
  public: false,
  inputs: ['collection'],
  outputs: ['query'],
}, (inputs, output, control) => {
    output('query', {collection: inputs.collection, pipeline: []});
});
