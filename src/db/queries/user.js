const knex = require('../connection');

function addUser(user) {
  return knex('users')
      .insert(user)
      .returning('*');
}

function getUserByUsername(username) {
  return knex('users')
      .select('*')
      .where({ username: username });
}
module.exports = {
  addUser,
  getUserByUsername
};
