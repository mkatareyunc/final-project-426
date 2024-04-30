import { db } from './db.mjs';

(async () => {
    try {
        await db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)');
        await db.run('INSERT INTO users (username, password) VALUES ("example_user", "password")');
        await db.run('CREATE TABLE IF NOT EXISTS user_favorites (id INTEGER PRIMARY KEY, user_id INTEGER, latitude DOUBLE, longitude DOUBLE, activity_id INTEGER, FOREIGN KEY(user_id) REFERENCES users(id))');
    } catch (error) {
        console.error('Error setting up database:', error);
    } finally {
        await db.close();
    }
})();