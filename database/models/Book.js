import mongoose, { Schema } from "mongoose";

const bookSchema=new Schema({
    title:{
        type:String,
        required:true,
        minLength:3,
        maxLength:150,
        trim:true
    },
    content:{
        type:String,
        required:true,
        minLength:3,
        maxLength:150,
        trim:true
    },
    author:{
        type:String,
        required:true
    },
    publishedDate:{
        type:Date,
        default:new Date()
    }
})

const Book=mongoose.model('Book',bookSchema)
export default Book