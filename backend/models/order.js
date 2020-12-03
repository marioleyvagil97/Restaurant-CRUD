const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
    id:{type:String, require:true},
    clientName:{type:String, require:true},
    productList:{type:Array, require:true},
    payed:{type:Boolean, require:true}
});

module.exports = mongoose.model('orders', orderSchema,);