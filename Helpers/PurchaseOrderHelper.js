'use strict';

//Helper for PurchaseOrder Related Functions
var db=require('../Database/db');
var helper={};
//Create New PurchaseOrder
helper.AddPurchaseOrder=function(purchaseOrderDetails){
  return new Promise(function(resolve, reject) {
    db.PurchaseOrder.create(purchaseOrderDetails)
      .then(purchaseOrder => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=purchaseOrder;
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

//Get All PurchaseOrder

helper.getAllPurchaseOrders=function()
{
  return new Promise(function(resolve, reject) {
    db.PurchaseOrder.findAll()
      .then(purchaseOrders => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=PurchaseOrders;
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

//Update Single PurchaseOrder
helper.updatePurchaseOrder=function(purchaseOrderDetails)
{
  return new Promise(function(resolve, reject) {
  db.PurchaseOrder.update(purchaseOrderDetails,{where: {purchaseorderid:PurchaseOrder.purchaseorderid}})
    .then(purchaseOrder => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=purchaseOrder;
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

//Change Status of PurchaseOrder
helper.ChangeStatus=function(id,status)
{
  return new Promise(function(resolve, reject) {
  db.PurchaseOrder.update({
    isactive:status
  },{where: {purchaseorderid:id}})
    .then(purchaseOrder => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=purchaseOrder;
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

//Get Single PurchaseOrder Detail
helper.getPurchaseOrderById=function(id)
{
  return new Promise(function(resolve, reject) {
  db.PurchaseOrder.findAll({where:{purchaseorderid:id}})
    .then(purchaseOrder => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=purchaseOrder;
      resolve(msg);
    })
    .catch(error => {
    resolve(error);// Ooops, do some error-handling
  });
});
}

module.exports=helper;
