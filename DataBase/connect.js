const config = require('../Config/config');
const Sequelize = require('sequelize');
var connection=new Sequelize(config.DATABASE_NAME, config.DATABASE_USERNAME, config.DATABASE_PASSWORD, {
  // the sql dialect of the database
  // currently supported: 'mysql', 'sqlite', 'postgres', 'mssql'
  dialect: 'postgres',
  //dialect: config.DATABASE_DIALECT,
  // custom host; default: localhost
  host: config.DATABASE_HOST,

  // custom port; default: dialect default
  port: config.DATABASE_PORT,

  // custom protocol; default: 'tcp'
  // postgres only, useful for Heroku
  protocol: 'tcp',

  // disable logging; default: console.log
  logging: false,
  omitNull: true,

  // a flag for using a native library or not.
  // in the case of 'pg' -- set this to true will allow SSL support
  // - default: false
  native: false,

  // similar for sync: you can define this to always force sync for models
  sync: { force: true },

  define: {
      underscored: true,
      timestamps: false,
      schema:'schema_kw',
      // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
    },
  // pool configuration used to pool database connections
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  }
});
module.exports=connection;
