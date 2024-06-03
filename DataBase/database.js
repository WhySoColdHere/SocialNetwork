const sqlite3 = require("sqlite3").verbose()
const dbName = "UsersDB.db"

let db = new sqlite3.Database(dbName, (err) => {
    if (err) { console.log(err.message) } else { console.log("Successfully connected!"); createDatabase() }
})

const createDatabase = () => {
    let id = "id INTEGER PRIMARY KEY AUTOINCREMENT"
    let name = "name TEXT UNIQUE"
    let password = "password"
    let email = "email TEXT UNIQUE"
    let phone = "phone TEXT UNIQUE"

    db.run(`CREATE TABLE IF NOT EXISTS users (${id}, ${name}, ${password}, ${email}, ${phone})`, (err) => {
        if (err) { console.log(err.message) } else { console.log("Table successfully created or already existed!") }
    })
}

module.exports = db