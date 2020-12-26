const Koa = require("koa")
const bodyParser = require('koa-bodyparser');

const indexRoutes = require('./routes')
const movieRoutes = require('./routes/movies')
const userRoutes = require('./routes/user')

const app = new Koa()

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
    ctx.app.emit('error', err, ctx);
  }
});

app.use(bodyParser());
require('./middlewares/auth');

app.use(indexRoutes.routes());
app.use(movieRoutes.routes());
app.use(userRoutes.routes());

app.on('error', (err, ctx) => {
  console.log('-------------error------------', err)
});

app.listen(3011, () => {
  console.log(`Server listening on port: 3011`);
})
