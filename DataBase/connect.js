const env = require('../Config/config');
const Sequelize = require('sequelize');
var connection=new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  // the sql dialect of the database
  // currently supported: 'mysql', 'sqlite', 'postgres', 'mssql'
  dialect: 'postgres',
  //dialect: env.DATABASE_DIALECT,
  // custom host; default: localhost
  host: env.DATABASE_HOST,

  // custom port; default: dialect default
  port: env.DATABASE_PORT,

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
  sync: { force: false },

  define: {
      underscored: true
    },
  // pool configuration used to pool database connections
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  }
});
module.exports=connection;
