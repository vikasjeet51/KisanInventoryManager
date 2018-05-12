'use strict';

//Helper for Vendor Related Functions
var db=require('../Database/db');
var helper={};
//Create New Vendor
helper.AddVendor=function(vendorDetails){
  return new Promise(function(resolve, reject) {
    db.Vendors.create(vendorDetails)
      .then(vendor => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=vendor;
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

helper.getAllVendors=function()
{
  return new Promise(function(resolve, reject) {
    db.Vendors.findAll()
      .then(vendors => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=vendors;
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
helper.updateVendor=function(vendorDetails)
{
  return new Promise(function(resolve, reject) {
  db.Vendors.update(vendorDetails,{where: {vendorid:vendorDetails.vendorid}})
    .then(vendor => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=vendor;
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

//Change Status of Vendor
helper.ChangeStatus=function(id,status)
{
  return new Promise(function(resolve, reject) {
  db.Vendors.update({
    isactive:status
  },{where: {vendorid:id}})
    .then(vendor => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=vendor;
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
helper.getVendorById=function(id)
{
  return new Promise(function(resolve, reject) {
  db.Vendors.findAll({where:{vendorid:id}})
    .then(vendor => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=vendor;
      resolve(msg);
    })
    .catch(error => {
    resolve(error);// Ooops, do some error-handling
  });
});
}

module.exports=helper;
