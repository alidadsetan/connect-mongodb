const { MongoClient } = require('mongodb');
const platform = require('connect-platform');


class DBNotAvailable extends Error {
  constructor(message = 'connection to mongodb instance is not available') {
    super(message);
  }
}

let config = platform.config.get('mongo-db', {});
let instance = undefined;
let url;
if (config.dburl) {
  if (config.db) {
    url = config.dburl + '/' + config.db
  } else {
    url = config.dburl;
  }
} else {
  url = 'mongodb://'
  if (config.user) {
    url += `${config.user}:${config.password}@`
  }
  url += config.url;
  if (config.port) {
    url += `:${config.port}`;
  }
}

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log('mongo db connect error', err)
  } else {
    instance = client.db(config.db)
  }
});

module.exports = {
  get connected() {
    return instance !== undefined;
  },
  get instance() {
    if (instance === undefined) {
      throw new DBNotAvailable();
    } else {
      return instance;
    }
  }
};
