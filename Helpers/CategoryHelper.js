'use strict';

//Helper for Vendor Related Functions
var db=require('../Database/db');
var helper={};
//Create New category
helper.AddCategory=function(CategoryDetails){
  return new Promise(function(resolve, reject) {
    db.Category.create(CategoryDetails)
      .then(category => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=category;
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

//Get All categories

helper.getAllCategory=function()
{
  return new Promise(function(resolve, reject) {
    db.Category.findAll()
      .then(category => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=category;
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

//Update Single Vendor
helper.updateCategory=function(categoryDetails)
{
  return new Promise(function(resolve, reject) {
  db.Category.update(categoryDetails,{where: {categoryid:categoryDetails.categoryid}})
    .then(mainCategory => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=mainCategory;
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

//Change Status of Category
helper.ChangeStatus=function(id,status)
{
  return new Promise(function(resolve, reject) {
  db.Category.update({
    isactive:status
  },{where: {maincategoryid:id}})
    .then(mainCategory => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=mainCategory;
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

//Get Single Category Detail
helper.getCategoryById=function(id)
{
  return new Promise(function(resolve, reject) {
  db.Category.findAll({where:{maincategoryid:id}})
    .then(maincategory => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=maincategory;
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
