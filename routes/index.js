//const users=require('./users');
const vendor=require('./vendor');
const mainCategory=require('./main_category');
const category=require('./category');
const subcategory=require('./sub_category');
const product=require('./product');

const status=require('./status');
const purchaseitem=require('./purchase_item');
const purchaseorder=require('./purchase_order');
const inventory=require('./inventory');

module.exports=function(app)
{
  app.use('/api/v1/vendor', vendor);
  app.use('/api/v1/maincategory', mainCategory);
  app.use('/api/v1/category', category);
  app.use('/api/v1/subcategory', subcategory);
  app.use('/api/v1/product', product);

  app.use('/api/v1/status', status);
  app.use('/api/v1/purchaseitem', purchaseitem);
  app.use('/api/v1/purchaseorder', purchaseorder);
  app.use('/api/v1/inventory', inventory);
  //app.use('/api/v1/category', category);
}
