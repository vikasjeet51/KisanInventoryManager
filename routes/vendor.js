'use strict';

//Router for Vendor API
var express = require('express');
var router = express.Router();


const vendorHelper=require('../Helpers/VendorHelper');

//Create New Vendor
router.post('/', (req, res) => {
  const new_vendor = req.body.vendordetl;
  var vendorDetails={
    vendorname: new_vendor.vendorname,
    vendorage: new_vendor.vendorage,
    vendoraddress: new_vendor.vendoraddress,
    vendoremail: new_vendor.vendoremail,
    vendormobile: new_vendor.vendormobile,
    vendorbankname: new_vendor.vendorbankname,
    vendorifsccode: new_vendor.vendorifsccode,
    vendoraccountnumber: new_vendor.vendoraccountnumber,
    vendortype:new_vendor.vendortype
  }
  vendorHelper.AddVendor(vendorDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);
  });
});

//Get All Vendors
router.get('/GetAllVendors', (req, res) => {
  vendorHelper.getAllVendors()
    .then(msg => {
      res.json(msg);
    })
    .catch(error => {
    res.json(error);// Ooops, do some error-handling
  });
});

//Update Vendor by ID
router.put('/', (req, res) => {
  const new_vendor = req.body.vendordetl;
  var vendorDetails={
    vendorname: new_vendor.vendorname,
    vendorage: new_vendor.vendorage,
    vendoraddress: new_vendor.vendoraddress,
    vendoremail: new_vendor.vendoremail,
    vendormobile: new_vendor.vendormobile,
    vendorbankname: new_vendor.vendorbankname,
    vendorifsccode: new_vendor.vendorifsccode,
    vendoraccountnumber: new_vendor.vendoraccountnumber,
    vendortype:new_vendor.vendortype,
    vendorid:new_vendor.vendorid

  };
  vendorHelper.updateVendor(vendorDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Change Status of vendor by ID
router.delete('/ChangeStatus', (req, res) => {
  const new_vendor = req.body.vendordetl;
  vendorHelper.ChangeStatus(new_vendor.vendorid,new_vendor.vendorStatus)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Get Vendor  by id
router.get('/GetVendor/:id', (req, res) => {
  var id = req.params.id;
  vendorHelper.getVendorById(id)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});

module.exports=router;
