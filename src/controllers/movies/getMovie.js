const queries = require('../../db/queries/movies')

module.exports = async ctx => {
  const movie = await queries.getSingleMovie(ctx.params.id);
  if (movie.length) {
    ctx.body = {
      status: 'success',
      data: movie
    };
  } else {
    ctx.status = 404;
    ctx.body = {
      status: 'error',
      message: 'That movie does not exist.'
    };
  }
}
