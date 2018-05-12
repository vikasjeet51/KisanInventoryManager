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
      required: false,
      validate: {
            validateEmail: function(value) {
               if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value))
               {
                  throw new Error('Email format error!')
               }
            }
          }
    },
    vendormobile: {
      type: DataTypes.STRING,
      required: false,
      validate: {
            validateMobile: function(value) {
               if(!/^[6-9]\d{9}$/.test(value))
               {
                  throw new Error('Mobile format error!')
               }
            }
          }

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
      type: DataTypes.ENUM,//,
      values: ['Company', 'Retailer', 'Wholesheller'],
validate:{
  isIn: {
    args:[['Company', 'Retailer', 'Wholesheller']],
  msg:'Invalid Vendor Type'
}
}
    },
    isactive: {
      type: DataTypes.BOOLEAN
    }
  }, {
    //underscored: true,

    tableName:'vendors'

  });
  return Vendor;
};
