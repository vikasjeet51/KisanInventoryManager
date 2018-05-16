'use strict';

//Helper for Vendor Related Functions
var db=require('../Database/db');
var helper={};
//Create New subcategory
helper.AddSubCategory=function(SubCategoryDetails){
  return new Promise(function(resolve, reject) {
    db.SubCategory.create(SubCategoryDetails)
      .then(subcategory => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=subcategory;
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

//Get All sub categories

helper.getAllSubCategory=function()
{
  return new Promise(function(resolve, reject) {
    db.SubCategory.findAll()
      .then(subcategory => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=subcategory;
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

//Update Single Sub Category
helper.updateSubCategory=function(subCategoryDetails)
{
  return new Promise(function(resolve, reject) {
  db.SubCategory.update(subCategoryDetails,{where: {subcategoryid:subCategoryDetails.subcategoryid}})
    .then(subCategory => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=subCategory;
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

//Change Status of Sub Category
helper.ChangeStatus=function(id,status)
{
  return new Promise(function(resolve, reject) {
  db.SubCategory.update({
    isactive:status
  },{where: {subcategoryid:id}})
    .then(subCategory => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=subCategory;
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

//Get Single SubCategory Detail
helper.getSubCategoryById=function(id)
{
  return new Promise(function(resolve, reject) {
  db.SubCategory.findAll({where:{subcategoryid:id}})
    .then(subCategory => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=subCategory;
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

module.exports=helper;
