const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'db.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, '.'))); // Serve static files

// API Endpoints
app.get('/tasks', async (req, res) => {
    try {
        const data = await fs.readFile(DB_PATH, 'utf8');
        res.json(JSON.parse(data).tasks);
    } catch (error) {
        res.status(500).send("Error reading tasks");
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
