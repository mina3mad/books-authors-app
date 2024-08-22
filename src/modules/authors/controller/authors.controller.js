import Author from "../../../../database/models/Author.js"


//create new author
export const addAuthor=async(req,res)=>{
    try {
        const newAuthor=await Author.insertMany(req.body)
        return res.status(201).json({messag:"done",newAuthor})
        
    } catch (error) {
        return res.status(500).json({message:"catch error",error})
    }
}


//retrieve a single author by its ID.
export const authorById=async(req,res)=>{
    try {
        const {id}=req.params
        const author=await Author.findOne({_id:id})
        // console.log(book);
        if(author){
            return res.status(200).json({messag:"author is:",author})

        }
        return res.status(400).json({messag:"author doesnt exist"})

    } catch (error) {
        return res.status(500).json({message:"catch error",error})
    }
}


//retrieve all authors
export const allAuthors=async(req,res)=>{
    try {
        const page = parseInt(req.query.page, 10) || 1; 
        const limit = parseInt(req.query.limit, 10) || 10; 
        const skip = (page - 1) * limit;

        const authors=await Author.find().populate('books').skip(skip).limit(limit)
        const totalCount = await Author.countDocuments()
        // console.log(books);
        
        if(authors.length){
            return res.status(200).json({messag:"authors are:",
                authors,
                page,
                limit,
                totalPages:Math.ceil(totalCount/limit),
                totalAuthors:totalCount
            })

        }
        return res.status(400).json({messag:"there is no authors"})

    } catch (error) {
        return res.status(500).json({message:"catch error",error})
    }
}


//search functionality to filter authors by bio or name
export const specificAuthors=async(req,res)=>{
    try {
        const{name,bio}=req.query
        const authors =await Author.find({$or:[{name},{bio}]})
        if(authors.length){
            return res.status(200).json({message:"authors are:",authors})
        }
        return res.status(400).json({message:"authors doesnt found"})

    } catch (error) {
        return res.status(500).json({message:"catch error",error})
        
    }
}


//update author by its id
export const updateAuthor=async(req,res)=>{
    try {
        const {id}=req.params
        const author=await Author.updateOne({_id:id},req.body)
        if(author.modifiedCount){
            return res.status(200).json({messag:"author is updated successfully"})

        }
        return res.status(400).json({messag:"author doesnt exist"})

    } catch (error) {
        return res.status(500).json({message:"catch error",error})
    }
}


//delete author by its id
export const deleteAuthor=async(req,res)=>{
    try {
        const {id}=req.params
        const author=await Author.deleteOne({_id:id})
        if(author.deletedCount){
            return res.status(200).json({messag:"author is deleted successfully"})

        }
        return res.status(400).json({messag:"author doesnt exist"})

    } catch (error) {
        return res.status(500).json({message:"catch error",error})
    }
}