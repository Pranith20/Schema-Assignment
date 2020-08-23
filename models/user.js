const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name:{
        type:String,
        required:[true,'This is a required field']
    },
    email:{
        type:String
        required:[true,'This is a required field']

    },
    password:{
        type:String,
        required:[true,'This is a required field']
    },
    purchase_history:{
        type:String
    }
})

const User = mongoose.model('User', UserSchema);
module.exports =User;