const platform = require('../../../');


platform.core.node({
  path: '/mongo-db/aggregate/graph-lookup',
  public: false,
  inputs: ['query', 'from', 'startWith', 'connectFromField', 'connectToField', 'as'],
  outputs: ['query'],
}, (inputs, output, control) => {
  let {from, startWith, connectFromField, connectToField, as} = inputs;
  inputs.query.pipeline.push({$graphLookup: {from, startWith, connectFromField, connectToField, as}});
  output('query', inputs.query);
});
