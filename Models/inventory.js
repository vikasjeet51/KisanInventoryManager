'use strict'

module.exports=function(sequelize,DataTypes){

const inventory= sequelize.define('inventory',{
inventoryitemid:{
  type:DataTypes.INTEGER,
  primaryKey:true,
  autoIncrement:true
},
purchaseitemid:{
  type:DataTypes.INTEGER,
  required:true
},
quantity:{
  type:DataTypes.DECIMAL,
  required:true
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
  tableName:'inventory'
});
  return inventory;
}
