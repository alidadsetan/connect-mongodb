const platform = require('../../../');


platform.core.node({
  path: '/mongo-db/aggregate/match',
  public: false,
  inputs: ['query', 'criteria'],
  outputs: ['query'],
}, (inputs, output, control) => {
  inputs.query.pipeline.push({$match: inputs.criteria});
  output('query', inputs.query);
});
