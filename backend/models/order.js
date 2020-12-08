const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
    id:{type:String},
    clientName:{type:String},
    productList:{type:Array},
    payed:{type:Boolean}
});

module.exports = mongoose.model('orders', orderSchema,);