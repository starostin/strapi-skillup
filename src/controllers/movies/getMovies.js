const queries = require('../../db/queries/movies')

module.exports = async ctx => {
  const movies = await queries.getAllMovies();
  ctx.body = {
    status: 'success',
    data: movies
  };
}
