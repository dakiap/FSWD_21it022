import express from 'express';
import pkg  from 'body-parser';

const { json } = pkg;

const app = express();
const port = 3005;

let books = [
  { id: 1, title: 'Hello World!', author: 'C' },
  { id: 2, title: 'Gaming', author: 'Unity' },
  { id: 3, title: 'Shopping', author: 'Amazon' },
];

app.use(json());

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    res.json(book);
  }
});

app.post('/api/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) { 
    res.status(404).json({ error: 'Book not found' });
  } else {
    books[bookIndex] = { id: bookId, title, author };
    res.json(books[bookIndex]);
  }
});

app.delete('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter((b) => b.id !== bookId);
  res.json({ message: 'Book deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});