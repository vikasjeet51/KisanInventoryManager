'use strict';

//Router for PRODUCT API
var express = require('express');
var router = express.Router();


const productHelper=require('../Helpers/productHelper');

//Create New Product
router.post('/', (req, res) => {
  const new_product = req.body.productdetl;
  var productDetails={
    productname: new_product.productname,
    description: new_product.description,
    prodcategory: new_product.prodcategory,
    createdby: new_product.createdby,
    modifiedby: new_product.modifiedby
  }
  productHelper.AddProduct(productDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);
  });
});

//Get All Products
router.get('/GetAllProducts', (req, res) => {
  productHelper.getAllProducts()
    .then(msg => {
      res.json(msg);
    })
    .catch(error => {
    res.json(error);// Ooops, do some error-handling
  });
});

//Update Product by ID
router.put('/', (req, res) => {
  const new_product = req.body.productdetl;
  var productDetails={
    productname: new_product.productname,
    description: new_product.description,
    prodcategory: new_product.prodcategory,
    modifiedby: new_product.modifiedby,
    productid:new_product.productid

  };
  productHelper.updateProduct(productDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Change Status of product by ID
router.delete('/ChangeStatus', (req, res) => {
  const new_product = req.body.productdetl;
  productHelper.ChangeStatus(new_product.productid,new_product.productStatus)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Get Product  by id
router.get('/GetProduct/:id', (req, res) => {
  var id = req.params.id;
  productHelper.getProductById(id)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});

module.exports=router;
