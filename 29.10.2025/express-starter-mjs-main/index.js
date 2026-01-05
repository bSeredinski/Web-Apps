import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const port = 8080;
const app = express();

// __dirname w ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'static')));

// ROUTES
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'htmls', 'index.html'));
});

app.get('/o-nas', (req, res) => {
  res.sendFile(path.join(__dirname, 'htmls', 'onas.html'));
});

app.get('/oferta', (req, res) => {
  res.sendFile(path.join(__dirname, 'htmls', 'oferta.html'));
});

app.get('/kontakt', (req, res) => {
  res.sendFile(path.join(__dirname, 'htmls', 'kontakt.html'));
});

// POST – formularz kontaktowy
app.post('/kontakt', (req, res) => {
  console.log('Dane z formularza:');
  console.log(req.body);

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
