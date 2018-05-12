'use strict';
var express = require('express');
var router = express.Router();
var db=require('../Database/db.js');

router.post('/', (req, res) => {
  //const created_at = new Date();
  const new_vendor = req.body.vendordetl;
  db.vendors.create({
    vendorname: new_vendor.vendorname,
    vendorage: new_vendor.vendorage,
    vendoraddress: new_vendor.vendoraddress,
    vendoremail: new_vendor.vendoremail,
    //created_at: created_at
    vendormobile: new_vendor.vendormobile,
    vendorbankname: new_vendor.vendorbankname,
    vendorifsccode: new_vendor.vendorifsccode,
    vendoraccountnumber: new_vendor.vendoraccountnumber,
    //
    vendortype:new_vendor.vendortype
  })
    .then(vendor => {
      res.json(vendor);
    });
});

module.exports=router;
