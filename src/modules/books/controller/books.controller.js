import Book from "../../../../database/models/Book.js"


//create new book
export const addBook=async(req,res)=>{
    try {
        const newBook=await Book.insertMany(req.body)
        return res.status(201).json({messag:"done",newBook})
        
    } catch (error) {
        return res.status(500).json({message:"catch error",error})
    }
}


//retrieve a single book by its ID.
export const bookById=async(req,res)=>{
    try {
        const {id}=req.params
        const book=await Book.findOne({_id:id})
        // console.log(book);
        if(book){
            return res.status(200).json({messag:"book is:",book})

        }
        return res.status(400).json({messag:"book doesnt exist"})

    } catch (error) {
        return res.status(500).json({message:"catch error",error})
    }
}

//search functionality to filter books by title or author
export const specificBooks=async(req,res)=>{
    try {
        const{title,author}=req.query
        const books =await Book.find({$or:[{title},{author}]})
        if(books.length){
            return res.status(200).json({message:"books is:",books})
        }
        return res.status(400).json({message:"books doesnt found"})

    } catch (error) {
        return res.status(500).json({message:"catch error",error})
        
    }
}


//retrieve all books.
export const allBooks=async(req,res)=>{
    try {
        const page = parseInt(req.query.page, 10) || 1; 
        const limit = parseInt(req.query.limit, 10) || 10; 
        const skip = (page - 1) * limit;

        const books=await Book.find().skip(skip).limit(limit)
        const totalCount = await Book.countDocuments();

        // console.log(books);
        
        if(books.length){
            return res.status(200).json({messag:"books is:",
                books,
                page,
                limit,
                totalPages:Math.ceil(totalCount/limit),
                totalBooks:totalCount
            })

        }
        return res.status(400).json({messag:"there is no books yet"})

    } catch (error) {
        return res.status(500).json({message:"catch error",error})
    }
}


//update book by its id
export const updateBook=async(req,res)=>{
    try {
        const {id}=req.params
        const book=await Book.updateOne({_id:id},req.body)
        if(book.modifiedCount){
            return res.status(200).json({messag:"book is updated successfully"})

        }
        return res.status(400).json({messag:"book doesnt exist"})

    } catch (error) {
        return res.status(500).json({message:"catch error",error})
    }
}


//delete book by its id
export const deleteBook=async(req,res)=>{
    try {
        const {id}=req.params
        const book=await Book.deleteOne({_id:id})
        if(book.deletedCount){
            return res.status(200).json({messag:"book is deleted successfully"})

        }
        return res.status(400).json({messag:"book doesnt exist"})

    } catch (error) {
        return res.status(500).json({message:"catch error",error})
    }
}