'use strict';
var express = require('express');
var router = express.Router();
//var db=require('../Database/db.js');

const CategoryHelper=require('../Helpers/CategoryHelper');

router.post('/', (req, res) => {
  //const created_at = new Date();
  const new_Category = req.body.Category;

  var CategoryDetails={
    categoryname: new_Category.Name,
    description: new_Category.Description,
    maincategoryid:new_Category.MainCategoryId,
    createdby:111,
    modifiedby:111
  }
  mainCategoryHelper.AddCategory(CategoryDetails)
  .then(newCategory => {
      res.json(newCategory);
    })
    .catch(error => {
    res.json(error);// Ooops, do some error-handling
  });
});


//Get All main categories
router.get('/', (req, res) => {
  //const created_at = new Date();
  //const new_vendor = req.body.vendordetl;
  CategoryHelper.getAllCategory()
    .then(allCategories => {
      res.json(allCategories);
    })
    .catch(error => {
    res.json(error);// Ooops, do some error-handling
  });
});

//Update Category by ID
router.put('/', (req, res) => {
  const category = req.body.Category;
  var CategoryDetails={
    categoryname: category.Name,
    description: category.Description,
    maincategoryid:category.MainCategoryId,
    modifiedby:111
  }
  CategoryHelper.updateCategory(CategoryDetails)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Change Status of category by ID
router.delete('/ChangeStatus', (req, res) => {
const category = req.body.Category;
  CategoryHelper.ChangeStatus(category.categoryid,category.isactive)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});


//Get Category by id
router.get('/GetCategory/:id', (req, res) => {
  var id = req.params.id;
  CategoryHelper.getCategoryById(id)
    .then(msg => {
      res.json(msg);
    })
    .catch(msg => {
    res.json(msg);// Ooops, do some error-handling
  });
});

module.exports=router;
