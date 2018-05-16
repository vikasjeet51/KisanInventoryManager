'use strict';

//Helper for Vendor Related Functions
var db=require('../Database/db');
var helper={};
//Create New Main category
helper.AddMainCategory=function(mainCategoryDetails){
  return new Promise(function(resolve, reject) {
    db.MainCategory.create(mainCategoryDetails)
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

//Get All Vendors

helper.getAllMainCategory=function()
{
  return new Promise(function(resolve, reject) {
    db.MainCategory.findAll()
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

//Update Single Vendor
helper.updateManiCategory=function(maincategoryDetails)
{
  return new Promise(function(resolve, reject) {
  db.MainCategory.update(maincategoryDetails,{where: {maincategoryid:maincategoryDetails.maincategoryid}})
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
  db.MainCategory.update({
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

//Get Single Vendor Detail
helper.getMaincategoryById=function(id)
{
  return new Promise(function(resolve, reject) {
  db.MainCategory.findAll({where:{maincategoryid:id}})
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
