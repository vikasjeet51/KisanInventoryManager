'use strict';

//Router for Status API
var express = require('express');
var router = express.Router();


const statusHelper=require('../Helpers/StatusHelper');

//Create New Status
router.post('/', (req, res) => {
  const new_status = req.body.status;
  var statusDetails={
    status: new_status.productname,
    statustype: new_status.description,
    createdby: 111,
    modifiedby: 111
  }
  statusHelper.AddStatus(statusDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);
  });
});

//Get All Status
router.get('/', (req, res) => {
  statusHelper.getAllStatus()
    .then(msg => {
      res.json(msg);
    })
    .catch(error => {
    res.json(error);// Ooops, do some error-handling
  });
});

//Update Status by ID
router.put('/', (req, res) => {
  const status = req.body.status;
  var statusDetails={
    statusid:status.statusid,
    status: status.status,
    statustype: status.statustype,
    modifiedby: 111
  };
  statusHelper.updateStatus(statusDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Change Status of vendor by ID
router.delete('/ChangeStatus', (req, res) => {
  const status = req.body.status;
  statusHelper.ChangeStatus(status.statusid,status.isActive)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Get Status  by id
router.get('/GetStatus/:id', (req, res) => {
  var id = req.params.id;
  statusHelper.getStatusById(id)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});

module.exports=router;
