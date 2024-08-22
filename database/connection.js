import mongoose from "mongoose";
const dbConnect=()=>{
    mongoose.connect('mongodb://localhost:27017/BookAuthor').then(()=>{
        console.log("Db connected");
        
    }).catch(()=>{
        console.log("Db failed");
    })
}
export default dbConnect