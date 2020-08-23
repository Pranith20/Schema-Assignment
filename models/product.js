const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ProductSchema=new Schema({
    Product_name:{
        type:String,
        required:[true,'This is a required field']
    },
    Description:{
        type:String
        required:[true,'This is a required field']

    },
    Price:{
        type:Number,
        required:[true,'This is a required field']
    },
    Category:{
        type:String,
        required:[true,'This is a required field']
    },
    Quantity:{
        type:Number
    }

})

const Product= mongoose.model('Product', ProductSchema);
module.exports =Product;