const platform = require('connect-platform');
const db = require('../database');

let dictionary = {
      '==': '$eq',
      '>': '$qt',
      '<': '$lt',
      '>=': '$gte',
      '<=': '$lte'
    };

platform.core.node({
  path: '/mongo-db/search/filter',
  public: false,
  inputs: ['query', 'field', 'op', 'value'],
  outputs: ['filtered'],
  controlOutputs: ['no_connection'],
}, (inputs, output, control) => {
  if (db.connected) {
    let {op, value, field} = inputs;
    let condition = {};
    if(op in dictionary){
      op = dictionary[op]
    }   
    condition[op] = value;
    let query = {};
    query[field] = condition; 
    output('filtered', inputs.query.filter(query));
  }
  else control('no_connection');
});
