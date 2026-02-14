import mongoose from "mongoose";


const usersSchema = new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true,
            trim:true                   
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            trim:true,
            minlength:[8,"password should be at least 8 characters long"]
        },
        phone:{
            type:String,
            minlength:[10,"phone number should be at least 10 characters long"],
            trim:true
        },
        refreshtoken:{
            type:String,
            trim:true

        }
    }
    ,
    {timestamps:true}
);

export const User = mongoose.model("User",usersSchema); 