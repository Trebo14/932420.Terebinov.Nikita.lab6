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

app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
});
