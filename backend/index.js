const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//list of jokes 

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {id: 1,
        title: "Why don't scientists trust atoms?",
        content: "Because they make up everything!"
        },

        {id: 2,
        title: "Why did the scarecrow win an award?",
        content: "Because he was outstanding in his field!"
        },

        {id: 3,
        title: "Why don't programmers like nature?",
        content: "It has too many bugs."
        },

        {id: 4,
        title: "Why do we tell actors to 'break a leg?'",
        content: "Because every play has a cast."
        },

        {id: 5,
        title: "Why did the bicycle fall over?",
        content: "Because it was two-tired!"
        }
    ];
    res.json(jokes);
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 