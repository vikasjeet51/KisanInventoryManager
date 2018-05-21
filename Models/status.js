'use strict'

module.exports =function(sequelize, DataTypes){
  const Status = sequelize.define('status', {
    statusid: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
      status: {
        type: DataTypes.STRING,
        required: true
      },
    statustype: {
      type: DataTypes.ENUM,//,
      values: ['PurchaseOrder', 'PurchaseOrderReturn', 'CustomerOrder'],
      validate:{
        isIn: {
          args:[['PurchaseOrder', 'PurchaseOrderReturn', 'CustomerOrder']],
        msg:'Invalid status Type'
      }
      }
    },
    isactive: {
      type: DataTypes.BOOLEAN
    },
    createdby:{
      type:DataTypes.INTEGER
    },
    modifiedby:{
    type:DataTypes.INTEGER,
    required: true
    }
  }, {
    //underscored: true,

    tableName:'status'

  });
  return Status;
};
