const queries = require('../../db/queries/movies')

module.exports = async ctx => {
  const movie = await queries.updateMovie(ctx.params.id, ctx.request.body);
  if (movie.length) {
    ctx.status = 200;
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
