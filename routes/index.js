//const users=require('./users');
const vendor=require('./vendor');
module.exports=function(app)
{
  app.use('/api/v1/vendor', vendor);
  //app.use('/api/v1/category', category);
}
