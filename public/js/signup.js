let form = document.getElementById("signup_form")
form.addEventListener("submit", submitSignUpFormData)

function submitSignUpFormData(event) {
    event.preventDefault()

    let username = form.querySelector("[name='username_input_s']").value
    let email = form.querySelector("[name='email_input_s']").value
    let password = form.querySelector("[name='password_input_s']").value
    let phone = form.querySelector("[name='phone_input_s']").value

    //console.log(`${username}\n${email}\n${password}\n${phone}`)

    // Здесь происходит запись данных в бд, и переадресовка клиента на login
    window.location.href = '/login';
}
