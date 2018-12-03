With a partner/group:

1.  Write the SQL to create tables for Books (id, title, author_id) and Authors (id, name)

CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    author_id INTEGER
);

CREATE TABLE IF NOT EXISTS authors (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255)
);

2.  Write the SQL to get all Books

SELECT * FROM books;

3.  Write the SQL to get all Authors

SELECT * FROM authors; 

4.  Write the SQL to create a new book, given the title and author id

INSERT INTO books (title, author_id) VALUES ("Huckleberry Finn", 27)

5.  Write the SQL to create a new author, given the author's name

INSERT INTO authors (name) VALUES ("Mark Twain")

6.  Write the SQL to get all Books by a given author, given the author's id

SELECT * FROM BOOKS WHERE author_id = id;

7.  Write the SQL to get all Books by a given author, given the author's name

SELECT * FROM books INNER JOIN authors on books.author_id = authors.id

8.  Write the SQL to update a Book's title

UPDATE books SET TITLE = 'new title' WHERE title = 'old title';


