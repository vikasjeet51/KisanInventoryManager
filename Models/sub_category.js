'use strict'

module.exports =function(sequelize, DataTypes){
  const SubCategory = sequelize.define('subcategory', {
    subcategoryid: {
      type:DataTypes.INTEGER,
      primaryKey: true,
        autoIncrement: true
    },
    subcategoryname: {
      type: DataTypes.STRING,
      required: true
      },
    categoryid: {
      type: DataTypes.INTEGER,
      required: true
    },
    description: {
      type: DataTypes.STRING,
      required: true
    },
    isactive: {
      type: DataTypes.BOOLEAN
    },
    createdby:{
      type:DataTypes.INTEGER,
      required: true
    },
    modifiedby:{
    type:DataTypes.INTEGER,
    required: true
    }
  }, {
    tableName:'subcategory'
  });
  return SubCategory;
};
