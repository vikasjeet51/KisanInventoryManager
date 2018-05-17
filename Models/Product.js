'use strict'

module.exports =function(sequelize, DataTypes){
  const Product = sequelize.define('Products', {
    productname: {
      type: DataTypes.STRING,
      required: true
    },
    productid: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
    prodcategory: {
      type: DataTypes.INTEGER,
      required: true
    },
    createdby: {
      type: DataTypes.INTEGER,
      required: true
    },
    modifiedby:{
      type: DataTypes.INTEGER,
      required: true
    },
    description: {
      type: DataTypes.STRING,
      required: false
    },
    isactive: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    tableName:'product'

  });
  return Product;
};
