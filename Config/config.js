'use strict';

const environmentvar = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || 'jdbc:postgresql://localhost:5432/sequelize_blog_post',
  DATABASE_NAME: process.env.DATABASE_NAME || 'db_KisanWorld',
  DATABASE_HOST: process.env.DATABASE_HOST || '173.249.63.83',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'password',
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = environmentvar;
