'use strict'

module.exports =function(sequelize, DataTypes){
  const MainCategory = sequelize.define('maincategory', {
    maincategoryid: {
      type:DataTypes.INTEGER,
      primaryKey: true,
        autoIncrement: true
    },
    maincategoryname: {
      type: DataTypes.STRING,
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
    tableName:'maincategory'
  });
  return MainCategory;
};
