'use strict';

//Helper for PurchaseItem Related Functions
var db=require('../Database/db');
var helper={};
//Create New PurchaseItem
helper.AddPurchaseItem=function(purchaseItemDetails){
  return new Promise(function(resolve, reject) {
    db.PurchaseItem.create(purchaseItemDetails)
      .then(purchaseItem => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=purchaseItem;
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

//Get All PurchaseItems

helper.getPurchaseItems=function()
{
  return new Promise(function(resolve, reject) {
    db.PurchaseItem.findAll()
      .then(purchaseItems => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=purchaseItems;
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

//Update Single PurchaseItems
helper.updatePurchaseItem=function(PurchaseItemDetails)
{
  return new Promise(function(resolve, reject) {
  db.PurchaseItem.update(PurchaseItemDetails,{where: {purchaseitemid:PurchaseItemDetails.purchaseitemid}})
    .then(purchaseItem => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=purchaseItem;
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

//Change Status of PurchaseItems
helper.ChangeStatus=function(id,status)
{
  return new Promise(function(resolve, reject) {
  db.PurchaseItem.update({
    isactive:status
  },{where: {purchaseitemid:id}})
    .then(item => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=item;
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

//Get Single PurchaseItems Detail
helper.getProductById=function(id)
{
  return new Promise(function(resolve, reject) {
  db.PurchaseItem.findAll({where:{purchaseitemid:id}})
    .then(item => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=item;
      resolve(msg);
    })
    .catch(error => {
    resolve(error);// Ooops, do some error-handling
  });
});
}

module.exports=helper;
