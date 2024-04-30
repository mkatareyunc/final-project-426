import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import { db } from './db.mjs';


const app = express();

app.use(bodyParser.json());

app.use(cors())

const access_token = await getAccessToken();

const port = 3000;

app.get('/tours', async(req, res) => {
    try{
        let longitude = req.query.longitude;
        let latitude = req.query.latitude;
        let radius = req.query.radius;
        let response = await axios.get(`https://test.api.amadeus.com/v1/shopping/activities?latitude=${latitude}&longitude=${longitude}&radius=${radius}`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        let responseData = response.data; 
        res.json(responseData);
    }catch(e){
        res.status(400).send('Error Retrieving Data');
    }
});

app.post('/favorites', async(req, res) => {
    let userId = req.body.userId;
    let activityId = req.body.activityId;
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;

    try {
        // Check if the activity already exists for the user
        const existingActivity = await db.get('SELECT * FROM user_favorites WHERE user_id = ? AND activity_id = ?', userId, activityId);
        if (existingActivity) {
            return res.status(400).send('Activity already exists in favorites');
        }

        // Insert association data into the database
        let favLength = await db.all('SELECT * FROM user_favorites WHERE user_id = ?', userId);
        if(favLength.length >= 6){
            return res.status(400).send('User already has maximum number of favorites');
        }
        await db.run('INSERT INTO user_favorites (user_id, latitude, longitude, activity_id) VALUES (?, ?, ?, ?)', userId, latitude, longitude, activityId);

        res.status(201).send('Attraction associated with user successfully');
    } catch (error) {
        console.error('Error associating attraction with user:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/favorites', async(req, res) => {
    //Information to be retrieved from the user_favorite table
    let userId = req.query.userId;
    try {
        // Retrieve user favorites from the database
        const favorites = await db.all('SELECT * FROM user_favorites WHERE user_id = ?', userId);
        res.json(favorites);
    } catch (error) {
        console.error('Error retrieving user favorites:', error);
        res.status(500).send('Internal Server Error');
    }
});

//This function is to retrieve user access token from Amadeus API
async function getAccessToken() {
    try {
        const data = new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: "RE3Zx0WximAXUG4rbOwIsar2RhH2Di8Y",
            client_secret: "ur0G084QS8GVd2lm",
        });
        let response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        return response.data.access_token;
    } catch (e) {
        return null;
    }
}

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

        res.status(200).json({userId: user.id, username: user.username});
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});