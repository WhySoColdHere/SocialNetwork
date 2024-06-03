let form = document.getElementById("signup_form")
form.addEventListener("submit", submitSignUpFormData)

function submitSignUpFormData(event) {
    event.preventDefault()

    let username = form.querySelector("[name='username_input_s']").value
    let email = form.querySelector("[name='email_input_s']").value
    let password = form.querySelector("[name='password_input_s']").value
    let phone = form.querySelector("[name='phone_input_s']").value

    if (isUsernameValid(username) && isEmailValid(email) && isPasswordValid(password) && isPhoneValid(phone)) {
        let isUsernameTaken = false
        let isEmailTaken = false
        let isPhoneTaken = false

        DBRequiresClass.getUsersReq("GET", DBRequiresClass.getUsersUrl())
            .then((data) => {
                for (const user of data) {
                    isUsernameTaken = username === user["name"];
                    isEmailTaken = email === user["email"];
                    isPhoneTaken = phone === user["phone"];
                }
            }).then(() => {
                if (!isUsernameTaken && !isEmailTaken && !isPhoneTaken) {
                    const body = {
                        "name": username,
                        "email": email,
                        "password": password,
                        "phone": phone
                    }

                    DBRequiresClass.addUserReq("POST", body, DBRequiresClass.addUserUrl())
                        .then(() => {
                            form.action = "/login"
                            form.submit()
                        })
                } else {
                    if (isUsernameTaken) { console.log("Username: taken") }
                    if (isEmailTaken) { console.log("email: taken") }
                    if (isPhoneTaken) { console.log("phone: taken") }
                }
        })
    }
}

const isUsernameValid = (username) => {
    let pattern = /[^a-zA-Z0-9]/;
    let res = username.length > 3 && !pattern.test(username)

    if (!res) { validationErrorTag("Username") }
    return res
}

const isPasswordValid = (password) => {
    let pattern = /[^a-zA-Z0-9]/;
    let res = password.length > 6 && !pattern.test(password)

    if (!res) { validationErrorTag("Password") }
    return res
}

const isEmailValid = (email) => {
    let res = email.indexOf("@") >= 0

    if (!res) { validationErrorTag("Email") }
    return res
}

const isPhoneValid = (phone) => {
    let pattern = /[^+|0-9]/
    let res = phone.length > 8 && !pattern.test(phone)

    if (!res) { validationErrorTag("Phone") }
    return res
}

const validationErrorTag = (text) => {
    let errorH1 = document.createElement(`h1`)
    errorH1.setAttribute(`id`, `errorH1Mess`)

    let resText = text + " is invalid. "
    switch (text) {
        case "Username":  resText += text + " should have only upper and lower case letters and numbers."; break;
        case "Email": break;
        case "Password": resText += text + " should have upper and lower case letters and numbers."; break
        case "Phone": break;
    }

    errorH1.appendChild(document.createTextNode(resText))
    document.querySelector("body").appendChild(errorH1)
}