'use strict'

const sequelizedbConnect=require('./connect');
const Sequelize = require('sequelize');

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelizedbConnect;

//Models/tables
db.vendors = require('../models/vendor.js')(sequelizedbConnect, Sequelize);
//db.comments = require('../models/comments.js')(sequelize, Sequelize);
//db.posts = require('../models/posts.js')(sequelize, Sequelize);

//Relations
//db.comments.belongsTo(db.posts);
//db.posts.hasMany(db.comments);
//db.posts.belongsTo(db.users);
//db.users.hasMany(db.posts);

module.exports = db;
