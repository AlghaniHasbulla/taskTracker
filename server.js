const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'db.json');

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.get('/tasks', async (req, res) => {
    try {
        const data = await fs.readFile(DB_PATH, 'utf8');
        res.json(JSON.parse(data).tasks);
    } catch (error) {
        console.error('Error reading tasks:', error);
        res.status(500).send('Error reading tasks');
    }
});

app.post('/tasks', async (req, res) => {
    try {
        const data = await fs.readFile(DB_PATH, 'utf8');
        const db = JSON.parse(data);
        db.tasks.push(req.body);
        await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
        res.status(201).send('Task added');
    } catch (error) {
        console.error('Error adding task:', error);
        res.status(500).send('Error adding task');
    }
});

app.delete('/tasks/:id', async (req, res) => {
    try {
        const data = await fs.readFile(DB_PATH, 'utf8');
        const db = JSON.parse(data);
        db.tasks = db.tasks.filter(task => task.id != req.params.id);
        await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
        res.status(200).send('Task deleted');
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).send('Error deleting task');
    }
});

app.use(express.static(__dirname));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));