'use strict';

//Router for PurchaseItem API
var express = require('express');
var router = express.Router();


const purchaseItemHelper=require('../Helpers/PurchaseItemHelper');

//Create New PurchaseItem
router.post('/', (req, res) => {
  const new_purchaseitem = req.body.purchaseitem;
  var purchaseItemDetails={
    purchaseorderid: new_purchaseitem.purchaseorderid,
    productid: new_purchaseitem.productid,
    purchaseprice: new_purchaseitem.purchaseprice,
    purchasedate: new_purchaseitem.purchasedate,
    lotnumber: new_purchaseitem.lotnumber,
    expirydate: new_purchaseitem.expirydate,
    quantity: new_purchaseitem.quantity,
    createdby: 111,
    modifiedby: 111
  }
  purchaseItemHelper.AddPurchaseItem(purchaseItemDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);
  });
});

//Get All PurchaseItems
router.get('/', (req, res) => {
  purchaseItemHelper.getAllPurchaseItems()
    .then(msg => {
      res.json(msg);
    })
    .catch(error => {
    res.json(error);// Ooops, do some error-handling
  });
});

//Update PurchaseItem by ID
router.put('/', (req, res) => {
  const purchaseitem = req.body.purchaseitem;
  var purchaseitemDetails={
    purchaseitemid: purchaseitem.purchaseitemid,
    purchaseorderid: purchaseitem.purchaseorderid,
    productid: purchaseitem.productid,
    purchaseprice: purchaseitem.purchaseprice,
    purchasedate: purchaseitem.purchasedate,
    lotnumber: purchaseitem.lotnumber,
    expirydate: purchaseitem.expirydate,
    quantity: purchaseitem.quantity,
    modifiedby: 111
  };
  purchaseItemHelper.updatePurchaseItem(purchaseitemDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Change Status of PurchaseItem by ID
router.delete('/ChangeStatus', (req, res) => {
  const purchaseitem = req.body.purchaseitem;
  purchaseItemHelper.ChangeStatus(purchaseitem.purchaseitemid,purchaseitem.isActive)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Get PurchaseItem  by id
router.get('/GetPurchaseItem/:id', (req, res) => {
  var id = req.params.id;
  purchaseItemHelper.getPurchaseItemById(id)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});

module.exports=router;
