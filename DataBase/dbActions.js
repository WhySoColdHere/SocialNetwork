const db = require("./database")

const addUser = (name, password, email, phone, callback) => {
    const sqlAdd = `INSERT INTO users (name, password, email, phone) VALUES (?, ?, ?, ?)`
    db.run(sqlAdd, [name, password, email, phone], function (err) {
        callback(err, {id: this.lastID})
    })
}

const getUsers = (callback) => {
    const sqlGet = `SELECT * FROM users`
    // params передавать необязательно.
    db.all(sqlGet, [], callback)
}

const getUser = (id, callback) => {
    const sqlGet = `SELECT * FROM users WHERE id = ?`
    db.all(sqlGet, [id], callback)
}

const updateUser = (id, name, password, email, phone, callback) => {
    const sqlUpdate = `UPDATE users SET name = ?, password = ?, email = ?, phone = ? WHERE id = ?`
    db.run(sqlUpdate, [name, password, email, phone, id], callback)
}

const deleteUser = (id, callback) => {
    const sqlDelete = `DELETE FROM users WHERE id = ?`
    db.run(sqlDelete, id, callback)
}


module.exports = {addUser, getUsers, getUser, updateUser, deleteUser}
