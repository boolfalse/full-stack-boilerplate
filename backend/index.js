const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;

// Middleware
app.use(cors());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// API route
app.get('/api', (req, res) => {
    res.send('Backend is running');
});

app.get('/api/random-message', (req, res) => {
    const messages = ["Message 1", "Message 2", "Message 3", "Message 4", "Message 5"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    res.json({ message: randomMessage });
});

// Fallback to index.html for React routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
