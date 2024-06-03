const form = document.getElementById("login_form")
form.addEventListener("submit", submitLogInFormData)

function submitLogInFormData(event) {
    event.preventDefault()

    let email = form.querySelector("[name='email_input_l']").value
    let password = form.querySelector("[name='password_input_l']").value

    let isDataInDatabase = false
    const body = {
        "email": email,
        "password": password
    }

    console.log(email, password)

    DBRequiresClass.getUserReq("POST", DBRequiresClass.getUserUrl(), body)
        .then(data => { if (data.length === 1) { isDataInDatabase = true }})
        .catch(err => console.log(err))
        .then(() => {
            if (isDataInDatabase) {
                form.action = "/socialnetwork"
                form.submit()
            } else {
                let errorH1 = document.createElement(`h1`)
                errorH1.setAttribute(`id`, `errorH1Mess`)
                errorH1.appendChild(document.createTextNode("Some data was invalid, try again."))

                document.querySelector("body").appendChild(errorH1)
            }
        })
        .catch(err => console.log(err))
}
