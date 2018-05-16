'use strict'

module.exports =function(sequelize, DataTypes){
  const Category = sequelize.define('category', {
    categoryid: {
      type:DataTypes.INTEGER,
      primaryKey: true,
        autoIncrement: true
    },
    categoryname: {
      type: DataTypes.STRING,
      required: true
      },
    maincategoryid: {
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
    tableName:'category'
  });
  return Category;
};
