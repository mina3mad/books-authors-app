import { Router } from "express";
import * as booksController from './controller/books.controller.js'
const booksRouter=Router()
booksRouter.post('/addBook',booksController.addBook)
booksRouter.get('/bookById/:id',booksController.bookById)
booksRouter.get('/allBooks',booksController.allBooks)
booksRouter.get('/specificBooks',booksController.specificBooks)
booksRouter.patch('/updateBook/:id',booksController.updateBook)
booksRouter.delete('/deleteBook/:id',booksController.deleteBook)
export default booksRouter