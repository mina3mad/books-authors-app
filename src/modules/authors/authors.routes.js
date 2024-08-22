import  {Router}  from "express";
import *as authorController from './controller/authors.controller.js'
const authorRouter=Router()
authorRouter.post('/addAuthor',authorController.addAuthor)
authorRouter.get('/authorById/:id',authorController.authorById)
authorRouter.get('/allAuthors',authorController.allAuthors)
authorRouter.get('/specificAuthors',authorController.specificAuthors)
authorRouter.patch('/updateAuthor/:id',authorController.updateAuthor)
authorRouter.delete('/deleteAuthor/:id',authorController.deleteAuthor)

export default  authorRouter