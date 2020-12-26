module.exports = async ctx => {
  console.log('-------user---------', ctx.state)
  const { user } = ctx.state
  console.log('-------user---------', ctx.state)
  // eslint-disable-next-line
  const { password, ...data } = user
  ctx.status = 200;
  ctx.body = {
    status: 'success',
    data
  };
}
