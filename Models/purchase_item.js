'use strict'

module.exports=function(sequelize,DataTypes){

const purchaseitem= sequelize.define('purchaseitem',{
purchaseitemid:{
  type:DataTypes.INTEGER,
  primaryKey:true,
  autoIncrement:true
},
purchaseorderid:{
  type:DataTypes.INTEGER,
  required:true
},
productid:{
  type:DataTypes.INTEGER,
  required:true
},

purchaseprice:{
  type:DataTypes.DECIMAL,
  required:true
},
purchasedate:{
  type:DataTypes.DATE,
  required:true
},
lotnumber:{
  type:DataTypes.STRING,
  required:true
},
expirydate:{
  type:DataTypes.DATE,
  required:true
},
quantity:{
  type:DataTypes.DECIMAL
},
isactive:{
  type:DataTypes.BOOLEAN
},
createdby:{
  type:DataTypes.INTEGER
},
modifiedby:{
type:DataTypes.INTEGER,
required: true
}
}, {
  tableName:'purchasetable'
});
  return purchaseitem;
}
