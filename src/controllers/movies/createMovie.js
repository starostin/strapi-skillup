const queries = require('../../db/queries/movies')

module.exports = async ctx => {
  const movie = await queries.addMovie(ctx.request.body);
  if (movie.length) {
    ctx.status = 201;
    ctx.body = {
      status: 'success',
      data: movie
    };
  } else {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: 'Something went wrong.'
    };
  }
}
