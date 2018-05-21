'use strict';

//Helper for Status Related Functions
var db=require('../Database/db');
var helper={};
//Create New Status
helper.AddStatus=function(statusDetails){
  return new Promise(function(resolve, reject) {
    db.Status.create(statusDetails)
      .then(status => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=status;
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

//Get All Status

helper.getAllStatus=function()
{
  return new Promise(function(resolve, reject) {
    db.Status.findAll()
      .then(Status => {
        var msg={};
        msg.StatusCode=200;
        msg.StatusMessage='Success';
        msg.Response=Status;
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

//Update Single Status
helper.updateStatus=function(statusDetails)
{
  return new Promise(function(resolve, reject) {
  db.Status.update(statusDetails,{where: {statusid:statusDetails.statusid}})
    .then(status => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=status;
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

//Change Status of Status
helper.ChangeStatus=function(id,status)
{
  return new Promise(function(resolve, reject) {
  db.Status.update({
    isactive:status
  },{where: {statusid:id}})
    .then(status => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=status;
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

//Get Single Status Detail
helper.getStatusById=function(id)
{
  return new Promise(function(resolve, reject) {
  db.Status.findAll({where:{statusid:id}})
    .then(status => {
      var msg={};
      msg.StatusCode=200;
      msg.StatusMessage='Success';
      msg.Response=status;
      resolve(msg);
    })
    .catch(error => {
    resolve(error);// Ooops, do some error-handling
  });
});
}

module.exports=helper;
