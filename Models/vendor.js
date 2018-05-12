'use strict'

module.exports =function(sequelize, DataTypes){
  const Vendor = sequelize.define('vendors', {
    vendorname: {
      type: DataTypes.STRING,
      required: true
    },
    vendorid: {
      type:DataTypes.INTEGER,
      primaryKey: true,
        autoIncrement: true
      },
    vendorage: {
      type: DataTypes.TINYINT,
      required: false
    },
    vendoraddress: {
      type: DataTypes.STRING,
      required: false
    },
    vendoremail: {
      type: DataTypes.STRING,
      required: false
    },
    vendormobile: {
      type: DataTypes.STRING,
      required: false
    },
    vendorbankname: {
      type: DataTypes.STRING,
      required: false
    },
    vendorifsccode: {
      type: DataTypes.STRING,
      required: false
    },
    vendoraccountnumber: {
      type: DataTypes.STRING,
      required: false
    },
    /*created_at: false,

// I want updatedAt to actually be called updateTimestamp
    updated_at: false,
    /*created_at: {
      type: DataTypes.DATE,
      required: false,
      fieldName:'createddate',
      field:'createddate'
    },
    updated_at: {
      type: DataTypes.DATE,
      required: false,
      fieldName:'modifieddate',
      field:'modifieddate'
    },*/

    vendortype: {
      type: DataTypes.STRING//,
      //values: ['Company', 'Retailer', 'Wholesheller']

    },
    isactive: {
      type: DataTypes.BOOLEAN
    }
  }, {
    underscored: true,
    timestamps: false,
    tableName:'vendors',
    schema:'schema_kw'
  });
  return Vendor;
};
