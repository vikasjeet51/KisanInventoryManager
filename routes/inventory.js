'use strict';

//Router for Inventory API
var express = require('express');
var router = express.Router();


const inventoryHelper=require('../Helpers/InventoryHelper');

//Create New Inventory
router.post('/', (req, res) => {
  const new_inventory = req.body.inventory;
  var inventoryDetails={
    purchaseitemid: new_inventory.purchaseitemid,
    quantity: new_inventory.quantity,
    createdby: 111,
    modifiedby: 111
  }
  inventoryHelper.AddInventory(inventoryDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);
  });
});

//Get All Inventory
router.get('/', (req, res) => {
  inventoryHelper.getAllInventory()
    .then(msg => {
      res.json(msg);
    })
    .catch(error => {
    res.json(error);// Ooops, do some error-handling
  });
});

//Update Inventory by ID
router.put('/', (req, res) => {
  const inventory = req.body.inventory;
  var inventoryDetails={
    inventoryitemid: new_inventory.inventoryitemid,
    purchaseitemid: new_inventory.purchaseitemid,
    quantity: new_inventory.quantity,
    modifiedby: 111
  };
  inventoryHelper.updateInventory(inventoryDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Change Status of Inventory by ID
router.delete('/ChangeStatus', (req, res) => {
  const inventory = req.body.inventory;
  inventoryHelper.ChangeStatus(inventory.inventoryitemid,inventory.isActive)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Get Inventory  by id
router.get('/GetInventory/:id', (req, res) => {
  var id = req.params.id;
  inventoryHelper.getInventoryById(id)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});

module.exports=router;
