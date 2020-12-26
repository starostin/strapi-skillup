// Update with your config settings.
const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'db');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      user : 'strapi_user',
      password : 'strapi_pass_1234',
      database : 'strapi_db'
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};
