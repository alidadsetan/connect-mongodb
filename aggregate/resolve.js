const platform = require('../../../');
const db = require('../database');


platform.core.node({
  path: '/mongo-db/aggregate/resolve',
  public: false,
  inputs: ['query'],
  outputs: ['result', 'db_error'],
  controlOutputs: ['no_connection'],
}, (inputs, output, control) => {
  if (db.connected) {
    let {collection, pipeline} = inputs.query;
    db.instance.collection(collection).aggregate(pipeline).toArray()
      .then(docs => output('result', docs))
      .catch(error => {
        output('db_error', error.details);
      });
  }
  else control('no_connection');
});
