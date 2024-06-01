const cors = require('cors')
const {addUser, getUsers, getUser, updateUser, deleteUser} = require("../DataBase/dbActions.js")
const express = require("express")
const router = express.Router()

// Cors необходим, что бы мой сервер отвечал на запросы иных источников. (npm i cors)
router.use(cors())
router.use(express.json())

router.get("/", (req, res) => {
    getUsers((err, rows) => {
        if (err) { res.status(500).send(err.message); console.log(err.message) } else { res.status(200).json(rows) }
    })
})

router.get("/:id", (req, res) => {
    getUser(req.params.id, (err, rows) => {
        if (err) { res.status(500).send(err.message); console.log(err.message) } else { res.status(200).json(rows) }
    })
})

router.post("/", (req, res) => {
    const { name, password, email, phone } = req.body
    addUser(name, password, email, phone, (err, data) => {
        if (err) { res.status(500).send(err.message); console.log(err.message) } else { res.status(200).send(`Item is added. id: ${data.id}`) }
    })
})

router.put("/:id", (req, res) => {
    const { name, password, email, phone } = req.body
    updateUser(req.params.id, name, password, email, phone, (err) => {
        if (err) { res.status(500).send(err.message); console.log(err.message) } else {
            res.status(200).send(`User's data with id ${req.params.id} has been updated.`)
        }
    })
})

router.delete("/:id", (req, res) => {
    deleteUser(req.params.id, (err) => {
        if (err) { res.status(500).send(err.message); console.log(err.message) } else {
            res.status(200).send(`User with id ${req.params.id} has been deleted.`)
        }
    })
})

module.exports = router