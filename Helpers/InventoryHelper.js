'use strict';

//Helper for Inventory Related Functions
var db=require('../Database/db');
var helper={};
//Create New Inventory
helper.AddInventory=function(inventoryDetails){
  return new Promise(function(resolve, reject) {
    db.Inventory.create(inventoryDetails)
      .then(inventory => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=inventory;
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

//Get All Inventory

helper.getAllInventory=function()
{
  return new Promise(function(resolve, reject) {
    db.Inventory.findAll()
      .then(inventory => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=inventory;
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

//Update Single Inventory
helper.updateInventory=function(inventoryDetails)
{
  return new Promise(function(resolve, reject) {
  db.Inventory.update(inventoryDetails,{where: {inventoryitemid:Inventory.inventoryitemid}})
    .then(inventory => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=inventory;
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

//Change Status of Inventory
helper.ChangeStatus=function(id,status)
{
  return new Promise(function(resolve, reject) {
  db.Inventory.update({
    isactive:status
  },{where: {inventoryitemid:id}})
    .then(inventory => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=inventory;
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

//Get Single Inventory Detail
helper.getInventoryById=function(id)
{
  return new Promise(function(resolve, reject) {
  db.Inventory.findAll({where:{inventoryitemid:id}})
    .then(inventory => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=inventory;
      resolve(msg);
    })
    .catch(error => {
    resolve(error);// Ooops, do some error-handling
  });
});
}

module.exports=helper;
