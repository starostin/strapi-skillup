module.exports = async ctx => {
  const { user } = ctx.state
  // eslint-disable-next-line
  const { password, ...data } = user
  ctx.status = 201;
  ctx.body = {
    status: 'success',
    data
  };
}
