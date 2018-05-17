'use strict';

//Helper for Product Related Functions
var db=require('../Database/db');
var helper={};
//Create New Product
helper.AddProduct=function(productDetails){
  return new Promise(function(resolve, reject) {
    db.Product.create(productDetails)
      .then(product => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=product;
        resolve(msg);
      })
      .catch(error => {
        var i=0;
        var msg={};
        msg.StatusCode=500;
        var sts=[];
        for(i=0;i<error.errors.length;i++)
        {
        sts.push(error.errors[i].message);
        }
        msg.StatusMessage=sts;
      resolve(msg);
    });
});
}

//Get All Product

helper.getAllProducts=function()
{
  return new Promise(function(resolve, reject) {
    db.Product.findAll()
      .then(products => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=products;
        resolve(msg);
      })
      .catch(error => {
        var i=0;
        var msg={};
        msg.StatusCode=500;
        var sts=[];
        for(i=0;i<error.errors.length;i++)
        {
        sts.push(error.errors[i].message);
        }
        msg.StatusMessage=sts;
      resolve(msg);
    });
});
}

//Update Single Product
helper.updateProduct=function(productDetails)
{
  return new Promise(function(resolve, reject) {
  db.Product.update(productDetails,{where: {productid:productDetails.productid}})
    .then(product => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=product;
      resolve(msg);
    })
    .catch(error => {
      var i=0;
      var msg={};
      msg.StatusCode=500;
      var sts=[];
      for(i=0;i<error.errors.length;i++)
      {
      sts.push(error.errors[i].message);
      }
      msg.StatusMessage=sts;
      resolve(msg);
  });
});
}

//Change Status of Product
helper.ChangeStatus=function(id,status)
{
  return new Promise(function(resolve, reject) {
  db.Product.update({
    isactive:status
  },{where: {productid:id}})
    .then(product => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=product;
      resolve(msg);
    })
    .catch(error => {
      var i=0;
      var msg={};
      msg.StatusCode=500;
      var sts=[];
      for(i=0;i<error.errors.length;i++)
      {
      sts.push(error.errors[i].message);
      }
      msg.StatusMessage=sts;
    resolve(msg);// Ooops, do some error-handling
  });
});
}

//Get Single Product Detail
helper.getProductById=function(id)
{
  return new Promise(function(resolve, reject) {
  db.Product.findAll({where:{productid:id}})
    .then(product => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=product;
      resolve(msg);
    })
    .catch(error => {
    resolve(error);// Ooops, do some error-handling
  });
});
}

module.exports=helper;
