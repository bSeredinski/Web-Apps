import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const posts = [
    { id: 1, title: 'Mój pierwszy post', body: 'Treść z mojego własnego serwera!' },
    { id: 2, title: 'React i Node.js', body: 'To połączenie naprawdę działa.' }
];

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    res.json({ post, comments: [] });
});

app.listen(5000, () => {
    console.log('Serwer działa na http://localhost:5000');
});