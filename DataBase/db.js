'use strict'

const sequelizedbConnect=require('./connect');
const Sequelize = require('sequelize');

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelizedbConnect;

//Models/tables
db.Vendors = require('../Models/vendor.js')(sequelizedbConnect, Sequelize);
db.MainCategory = require('../Models/main_category.js')(sequelizedbConnect, Sequelize);
db.Category = require('../Models/category.js')(sequelizedbConnect, Sequelize);
db.SubCategory = require('../Models/sub_category.js')(sequelizedbConnect, Sequelize);
db.Product = require('../Models/Product.js')(sequelizedbConnect, Sequelize);
//db.Vendors._schema='schema_kw';


//Relations
//db.Category.hasMany(db.MainCategory);
//db.MainCategory.belongsTo(db.Category);


module.exports = db;
