//const users=require('./users');
const vendor=require('./vendor');
const mainCategory=require('./main_category');
const category=require('./category');
const subcategory=require('./sub_category');
const product=require('./product');
module.exports=function(app)
{
  app.use('/api/v1/vendor', vendor);
  app.use('/api/v1/maincategory', mainCategory);
  app.use('/api/v1/category', category);
  app.use('/api/v1/subcategory', subcategory);
  app.use('/api/v1/product', product);
  //app.use('/api/v1/category', category);
}
