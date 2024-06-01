const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render(`index`)
})

app.route("/login").
    post((req, res) => {
    res.render(`login`)
}).get((req, res) => {
    res.render('login')
})

app.route("/signup").
post((req, res) => {
    res.render(`signup`)
}).get((req, res) => {
    res.render('signup')
})

app.route("/socialnetwork").
post((req, res) => {
    res.render(`socialnetwork`)
}).get((req, res) => {
    res.render('index')
})

const usersRoutes = require("./routes/usersRoutes")
app.use("/users", usersRoutes)

app.listen(80)

// const session = require("express-session")

// app.use(session({
//     secret: "my_secret", // Хз что это
//     cookie: {maxAge: 30000}, // Время сгорания куки.
//     saveUninitialized: false,
//     resave: true // Хз что это (чет вроде повторного сохранения данных), но если этого не будет, то вылезет ошибка/предупреждение
// }))