const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir, { index: false }));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: publicDir });
});

app.get('/about', (req, res) => {
    res.sendFile('about.html', { root: publicDir });
});

app.get('/api/status', (req, res) => {
    res.json({
        status: 'ok',
        project: 'Book catalog',
        author: 'Nikita Terebinov',
        timestamp: new Date().toISOString()
    });
});

app.get('/hello/:name', (req, res) => {
    res.send(`Привет, ${req.params.name}!`);
});

const books = [
    { title: 'Война и мир', author: 'Tolstoy', year: 1869 },
    { title: 'Анна Каренина', author: 'Tolstoy', year: 1877 },
    { title: 'Преступление и наказание', author: 'Dostoevsky', year: 1866 },
    { title: 'Идиот', author: 'Dostoevsky', year: 1869 },
    { title: 'Мастер и Маргарита', author: 'Bulgakov', year: 1967 },
    { title: 'Собачье сердце', author: 'Bulgakov', year: 1925 }
];

app.get('/api/books', (req, res) => {
    const { author, year } = req.query;
    let result = books;

    if (author !== undefined) {
        const authorLower = String(author).toLowerCase();
        result = result.filter(book => book.author.toLowerCase() === authorLower);
    }

    if (year !== undefined) {
        const yearNum = Number(year);
        if (Number.isNaN(yearNum))
            return res.json([]);
        result = result.filter(book => book.year === yearNum);
    }

    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
});
