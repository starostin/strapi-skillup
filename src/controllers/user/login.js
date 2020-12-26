const jwt = require('jsonwebtoken');

module.exports = async ctx => {
  const { user } = ctx.state
  // eslint-disable-next-line
  const { password, ...data } = user
  const body = { id: user.id, username: user.username };
  const token = jwt.sign({ user: body }, 'TOP_SECRET');
  ctx.status = 200;
  ctx.body = {
    status: 'success',
    token
  };
}
