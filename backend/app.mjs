import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';


const app = express();

app.use(bodyParser.json());

app.use(cors())

const api_key = process.env.api_key;

const port = 3000;

app.get('/points', async(req, res) => {
    try{
        let response = await axios.get('https://') // Add API URL
        res.json();
    }catch(e){
        res.status(400).send('Error Retrieving Data');
    }
});

app.get('/tours', async(req, res) => {
    try{
        let response = await axios.get('') // Add API URL
        res.json();
    }catch(e){
        res.status(400).send('Error Retrieving Data');
    }
});

app.post('/user', async(req, res) => {
    
});


app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});