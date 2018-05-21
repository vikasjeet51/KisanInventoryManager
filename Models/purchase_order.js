'use strict'

module.exports=function(sequelize,DataTypes){

const purchaseorder= sequelize.define('purchaseorder',{
purchaseorderid:{
  type:DataTypes.INTEGER,
  primaryKey:true,
  autoIncrement:true
},
vendorpurchaseordernum:{
  type:DataTypes.STRING,
  required:true
},
vendorid:{
  type:DataTypes.INTEGER,
  required:true
},
purchaseorderdate:{
  type:DataTypes.DATE,
  required:true
},
totalbillingcost:{
  type:DataTypes.DECIMAL,
  required:true
},
transportationcost:{
  type:DataTypes.DECIMAL,
  required:true
},
labourcost:{
  type:DataTypes.DECIMAL,
  required:true
},
additionalcost:{
  type:DataTypes.DECIMAL,
},
addcostdescription:{
  type:DataTypes.STRING,
},
paidamount:{
  type:DataTypes.DECIMAL,
  required:true
},
modeofpayment:{
  type:DataTypes.STRING,
},
paymentdescription:{
  type:DataTypes.STRING,
},
transactionid:{
  type:DataTypes.STRING,
},
orderstatusid:{
  type:DataTypes.INTEGER
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
  tableName:'purchaseorder'
});
  return purchaseorder;
}
