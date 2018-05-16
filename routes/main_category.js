'use strict';

//Router for MainCategory
var express = require('express');
var router = express.Router();


const mainCategoryHelper=require('../Helpers/MainCategoryHelper');
//var db=require('../Database/db.js');


//Create New Main Category
router.post('/', (req, res) => {
  //const created_at = new Date();
  const new_mainCategory = req.body.MainCategory;
  var mainCategoryDetails={
    maincategoryname: new_mainCategory.Name,
    description: new_mainCategory.Description,
    createdby:111,
    modifiedby:111
  }
  mainCategoryHelper.AddMainCategory(mainCategoryDetails)
    .then(newMainCategory => {
      res.json(newMainCategory);
    })
    .catch(error => {
    res.json(error);
  });
});

//Get All main categories
router.get('/', (req, res) => {
  //const created_at = new Date();
  //const new_vendor = req.body.vendordetl;
  mainCategoryHelper.getAllMainCategory()
    .then(allMainCategories => {
      res.json(allMainCategories);
    })
    .catch(error => {
    res.json(error);// Ooops, do some error-handling
  });
});

//Update Main Category by ID
router.put('/', (req, res) => {
  const mainCategory = req.body.MainCategory;
  var mainCategoryDetails={
    maincategoryname: mainCategory.Name,
    description: mainCategory.Description,
    modifiedby:111
  }
  mainCategoryHelper.updateManiCategory(maincategoryDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Change Status of main category by ID
router.delete('/ChangeStatus', (req, res) => {
const mainCategory = req.body.MainCategory;
  mainCategoryHelper.ChangeStatus(mainCategory.maincategoryid,mainCategory.isactive)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Get main category  by id
router.get('/GetMainCategory/:id', (req, res) => {
  var id = req.params.id;
  mainCategoryHelper.getMaincategoryById(id)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});

module.exports=router;
