const express = require('express');
const connectDB = require('./db');

const app = express();
const PORT = 5000;

connectDB();

app.get('/', (req, res) => {
    res.send('Hello from MongoDB-connected server! 🚀');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
