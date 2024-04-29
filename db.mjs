import {Database} from 'sqlite-async';

// Replace with your code to set up a database that goes here.

export let db = await Database.open('db.sqlite');
