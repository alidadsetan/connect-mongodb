const platform = require('connect-platform');
const ObjectId = require('mongodb').ObjectId;

platform.core.node({
  path: '/mongo-db/object-id',
  public: false,
  inputs: ['id'],
  outputs: ['objectId'],
}, (inputs, output) => {
    output('objectId', ObjectId(inputs.id))
});
