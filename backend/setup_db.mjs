import {db} from './db.mjs';

// Use the db object to run table creation commands and otherwise initialize your database setup here.
await db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT');
await db.run('INSERT INTO users (username, password) VALUES ("example_user", "password")');
await db.run('CREATE TABLE user_favorites (id INTEGER PRIMARY KEY, user_id INTEGER, location TEXT, latitude DOUBLE, longitude DOUBLE, FOREIGN KEY(user_id) REFERENCES users(id))');

db.close();