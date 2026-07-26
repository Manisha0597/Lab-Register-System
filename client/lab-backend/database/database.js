const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "lab.db");

const db = new sqlite3.Database(dbPath, (err) => {

    if (err) {
        console.log(err.message);
    } else {
        console.log("✅ Connected to SQLite Database");
    }

});

db.serialize(() => {

    db.run(`

        CREATE TABLE IF NOT EXISTS samples (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            patient TEXT NOT NULL,

            test TEXT NOT NULL,

            technician TEXT NOT NULL,

            collected TEXT NOT NULL,

            status TEXT NOT NULL,

            days INTEGER

        )

    `);

});

module.exports = db;