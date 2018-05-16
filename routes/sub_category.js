'use strict';

//Router for MainCategory
var express = require('express');
var router = express.Router();


const subCategoryHelper=require('../Helpers/SubCategoryHelper');
//var db=require('../Database/db.js');


//Create New sub Category
router.post('/', (req, res) => {
  //const created_at = new Date();
  const new_subCategory = req.body.SubCategory;
  var subCategoryDetails={
    subcategoryname: new_subCategory.Name,
    description: new_subCategory.Description,
    categoryid:new_subCategory.Categoryid,
    createdby:111,
    modifiedby:111
  }
  subCategoryHelper.AddSubCategory(subCategoryDetails)
    .then(newSubCategory => {
      res.json(newSubCategory);
    })
    .catch(error => {
    res.json(error);
  });
});

//Get All sub categories
router.get('/', (req, res) => {
  //const created_at = new Date();
  //const new_vendor = req.body.vendordetl;
  subCategoryHelper.getAllSubCategory()
    .then(allSubCategories => {
      res.json(allSubCategories);
    })
    .catch(error => {
    res.json(error);// Ooops, do some error-handling
  });
});

//Update sub Category by ID
router.put('/', (req, res) => {
  const subCategory = req.body.SubCategory;
  var subCategoryDetails={
    subcategoryname: subCategory.Name,
    description: subCategory.Description,
    categoryid:subCategory.Categoryid,
    modifiedby:111
  }
  subCategoryHelper.updateSubCategory(subCategoryDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Change Status of sub category by ID
router.delete('/ChangeStatus', (req, res) => {
const subCategory = req.body.SubCategory;
  subCategoryHelper.ChangeStatus(subCategory.subcategoryid,subCategory.isactive)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Get sub category  by id
router.get('/GetSubCategory/:id', (req, res) => {
  var id = req.params.id;
  subCategoryHelper.getsubcategoryById(id)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});

module.exports=router;
