import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { db } from './db.mjs';

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Registration endpoint
app.post('/register', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password

    try {
        // Check if username already exists
        const existingUser = await db.get('SELECT * FROM users WHERE username = ?', username);
        if (existingUser) {
            return res.status(400).send('Username already exists');
        }

        // Insert the user into the users table
        await db.run('INSERT INTO users (username, password) VALUES (?, ?)', username, password);

        res.status(201).send('Account created successfully');
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password

    try {
        // Retrieve user from the users table
        const user = await db.get('SELECT * FROM users WHERE username = ? AND password = ?', username, password);

        if (!user) {
            return res.status(401).send('Invalid username or password');
        }

        res.status(200).send('Login successful');
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal Server Error');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});