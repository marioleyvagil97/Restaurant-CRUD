const mongoose = require('mongoose');
const {Schema} = mongoose;

 const dishSchema = new Schema({
    id:{type:String,require:true},
    type:{type:String,require:true},
    name:{type:String,require:true},
    cost:{type:Number,require:true},
    description:{type:String,require:true},
    benefict:{type:Number,require:true}
});

module.exports = mongoose.model('dishes',dishSchema,);
