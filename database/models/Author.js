import mongoose, { Schema } from "mongoose";

const authorSchema=new Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:15,
        trim:true
    },
    bio:{
        type:String
    },
    birthDate:{
        type:Date,
        required:true,
    },
    books:{
        type:[{type:mongoose.Types.ObjectId,ref:"Book"}],
        required:true
    }
},{
    timestamps:true
})

const Author=mongoose.model('Author',authorSchema)
export default Author