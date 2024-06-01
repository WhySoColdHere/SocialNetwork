export const getUsersReq = (method) => {
    let url = "http://192.168.1.64:3000/users"

    return fetch(url, {
        method: method
    }).then(res => {
        if (res.ok) { return res.json() }
        return res.json().then(err => {
            const e = new Error("Something went wrong")
            e.data = err
            throw e
        })
    })
}

// getUsersReq("GET")
//     .then(data => { console.log(data) })
//     .catch(err => console.log(err))

export const getUserReq = (method, id) => {
    let url = `http://192.168.1.64:3000/users/${id}`

    return fetch(url, {
        method: method
    }).then(res => {
        if (res.ok) { return res.json() }
        return res.json().then(err => {
            const e = new Error("Something went wrong")
            e.data = err
            throw e
        })
    })
}

// getUserReq("GET", 2)
//     .then(data => { console.log(data) })
//     .catch(err => console.log(err))

export const addUserReq = (method, body) => {
    let url = `http://192.168.1.64:3000/users`

    let headers = {
        "Content-type": "application/json"
    }

    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    }).then(res => {
        return "Nice"
    }).catch(() => { console.log("Something went wrong") })
}

// const body = {
//     "name": "Nikol",
//     "password": "nikola225Z5",
//     "email": "nicolacool@gmail.com",
//     "phone": "+79183128963"
// }
// addUserReq("POST", body)
//     .then(data => { console.log(data) })
//     .catch(err => console.log(err))

export const updateUserReq = (method, body, id) => {
    let url = `http://192.168.1.64:3000/users/${id}`

    let headers = {
        "Content-type": "application/json"
    }

    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    }).then(res => {
        return "Nice"
    }).catch(() => { console.log("Something went wrong") })
}

// const body = {
//     "name": "Nikolaf",
//     "password": "nikolaf225Z5",
//     "email": "nicolacoolf@gmail.com",
//     "phone": "+79183128f963"
// }
// updateUserReq("PUT", body, 1)
//     .then(data => { console.log(data) })
//     .catch(err => console.log(err))

export const deleteUserReq = (method, id) => {
    let url = `http://192.168.1.64:3000/users/${id}`

    return fetch(url, {
        method: method,
    }).then(res => {
        return "Deleted"
    }).catch(() => { console.log("Something went wrong") })
}

// deleteUserReq("DELETE", 1)
//     .then(data => { console.log(data) })
//     .catch(err => console.log(err))
