the models:-

1.  book model:
• title (String, required)
• content (String, required)
• author (String, required)
• publishedDate (Date, default to the current date)

3. an author model:
• name (String, required)
• bio (String)
• birthDate (Date)
• books (Array of ObjectIds referencing Book model)

_______________________________________________________________________________________

APIs:-

• POST request to create a new book.
• GET request to retrieve all books.
• GET request to retrieve a single book by its ID.
• PATCH request to update a book by its ID.
• DELETE request to delete a book by its ID.
• POST request to create a new author.
• GET request to retrieve all authors.
• GET request to retrieve a single author by its ID.
• PATCH request to update an author by its ID.
• DELETE request to delete an author by its ID.


______________________________________________________________________________________
special features:-
Add pagination to the GET endpoints for retrieving all books and authors.
• Implement search functionality to filter books by title or author, and
authors by name or bio.
• Add a relationship so that when retrieving an author, the response
includes a list of books written by them.
______________________________________________________________________________________

postman documentation:https://documenter.getpostman.com/view/37303980/2sAXjDfFnW
