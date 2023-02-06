import mongoose from "mongoose";
const userShema=new mongoose.Schema({

    firstname:{
        type:String,
        required:true,
        min:5,
        trim:true
    },

    lastname:{
        type:String,
        required:true,
        min:5,
        trim:true
    },

    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        min:5
    },
    phone:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
});

const User=mongoose.model("user",userShema);

export default User;