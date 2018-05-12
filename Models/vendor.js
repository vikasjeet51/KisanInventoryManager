'use strict'

module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define('vendor', {
    vendorid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false
    },
    vendorname: {
      type: DataTypes.STRING,
      required: true
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
    vendortype: {
      type: DataTypes.ENUM,
      values: ['Company', 'Retailer', 'Wholesheller']

    }
  }, {
    underscored: true
  });
  return Vendor;
};
