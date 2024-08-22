import dbConnect from '../database/connection.js'
import authorRouter from'./modules/authors/authors.routes.js'
import bookRouter from './modules/books/books.routes.js';
const bootstrap=(app,express)=>{
    dbConnect()
    app.use(express.json())
    app.use('/authors',authorRouter)
    app.use('/books',bookRouter)
    app.use('*',(req,res,next)=>{
        res.json({message:"not found"})
    })
}
export default bootstrap