const express = require('express');
const app = express();
const PORT = 4000
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
}); 

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});