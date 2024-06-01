const form = document.getElementById("login_form")
form.addEventListener("submit", submitLogInFormData)

function submitLogInFormData(event) {
    event.preventDefault()

    // Надо сделать проверку, что бы при регистрации пользователя, в его username не содержалось символа '@'.
    let usernameOrEmail = form.querySelector("[name='username_or_email_input_l']").value
    let password = form.querySelector("[name='password_input_l']").value

    // Здесь должно проверятся, есть ли эти данные в бд. Если есть, отправляем пользователя на страничку соцсети,
    // если же нет, выдаем ошибку.

    let isDataInDatabase = true

    if (isDataInDatabase) {
        form.action = "/socialnetwork"
        form.submit()
    } else {
        let errorH1 = document.createElement(`h1`)
        errorH1.setAttribute(`id`, `errorH1Mess`)
        errorH1.appendChild(document.createTextNode("Some data was invalid, try again."))

        document.querySelector("body").appendChild(errorH1)
    }
}
