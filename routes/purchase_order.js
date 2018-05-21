'use strict';

//Router for PurchaseOrder API
var express = require('express');
var router = express.Router();


const purchaseOrderHelper=require('../Helpers/PurchaseOrderHelper');

//Create New PurchaseOrder
router.post('/', (req, res) => {
  const new_purchaseOrder = req.body.purchaseOrder;
  var purchaseOrderDetails={
    vendorpurchaseordernum: new_purchaseOrder.vendorpurchaseordernum,
    vendorid: new_purchaseOrder.vendorid,

    purchaseorderdate: new_purchaseOrder.purchaseorderdate,
    totalbillingcost: new_purchaseOrder.totalbillingcost,
    transportationcost: new_purchaseOrder.transportationcost,

    labourcost: new_purchaseOrder.labourcost,
    additionalcost: new_purchaseOrder.additionalcost,
    addcostdescription: new_purchaseOrder.addcostdescription,

    paidamount: new_purchaseOrder.paidamount,
    modeofpayment: new_purchaseOrder.modeofpayment,
    paymentdescription: new_purchaseOrder.paymentdescription,

    transactionid: new_purchaseOrder.transactionid,
    orderstatusid: new_purchaseOrder.orderstatusid,

    createdby: 111,
    modifiedby: 111
  }
  purchaseOrderHelper.AddPurchaseOrder(purchaseOrderDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);
  });
});

//Get All PurchaseOrder
router.get('/', (req, res) => {
  purchaseOrderHelper.getAllPurchaseOrders()
    .then(msg => {
      res.json(msg);
    })
    .catch(error => {
    res.json(error);// Ooops, do some error-handling
  });
});

//Update PurchaseOrder by ID
router.put('/', (req, res) => {
  const purchaseOrder = req.body.purchaseOrder;
  var purchaseOrderDetails={
    purchaseorderid: new_purchaseOrder.purchaseorderid,
    vendorpurchaseordernum: new_purchaseOrder.vendorpurchaseordernum,
    vendorid: new_purchaseOrder.vendorid,

    purchaseorderdate: new_purchaseOrder.purchaseorderdate,
    totalbillingcost: new_purchaseOrder.totalbillingcost,
    transportationcost: new_purchaseOrder.transportationcost,

    labourcost: new_purchaseOrder.labourcost,
    additionalcost: new_purchaseOrder.additionalcost,
    addcostdescription: new_purchaseOrder.addcostdescription,

    paidamount: new_purchaseOrder.paidamount,
    modeofpayment: new_purchaseOrder.modeofpayment,
    paymentdescription: new_purchaseOrder.paymentdescription,

    transactionid: new_purchaseOrder.transactionid,
    orderstatusid: new_purchaseOrder.orderstatusid,
    modifiedby: 111
  };
  purchaseOrderHelper.updatePurchaseOrder(purchaseOrderDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Change Status of PurchaseOrder by ID
router.delete('/ChangeStatus', (req, res) => {
  const purchaseOrder = req.body.purchaseOrder;
  purchaseOrderHelper.ChangeStatus(purchaseOrder.purchaseorderid,purchaseOrder.isActive)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Get PurchaseOrder  by id
router.get('/GetPurchaseOrder/:id', (req, res) => {
  var id = req.params.id;
  purchaseOrderHelper.getPurchaseOrderById(id)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});

module.exports=router;
