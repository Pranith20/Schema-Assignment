const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CategorySchema=new Schema({
    Category_name:{
        type:String,
        required:[true,'This is a required field']
    }

})

const Product= mongoose.model('Category', CategorySchema);
module.exports =Category;