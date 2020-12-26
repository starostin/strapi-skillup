const Koa = require("koa")
const bodyParser = require('koa-bodyparser');

const indexRoutes = require('./routes')
const movieRoutes = require('./routes/movies')
const app = new Koa()

app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(movieRoutes.routes());

app.listen(3011, () => {
  console.log(`Server listening on port: 3011`);
})
