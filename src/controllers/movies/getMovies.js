const queries = require('../../db/queries/movies')

module.exports = async ctx => {
  try {
    const movies = await queries.getAllMovies();
    ctx.body = {
      status: 'success',
      data: movies
    };
  } catch (err) {
    console.log(err)
  }
}
