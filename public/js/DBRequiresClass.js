class DBRequiresClass {
    static getUsersUrl = () => { return  `http://localhost/users/get_users`}
    static getUserUrl = () => {  return `http://localhost/users/get_user` }
    static addUserUrl = () => { return `http://localhost/users/add_user` }
    static updateUserUrl = (id) => { return `http://localhost/users/update_user/${id}` }
    static deleteUserUrl = (id) => { return `http://localhost/users/delete_user/${id}` }

    static getUsersReq = (method, url) => {
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

    static getUserReq = (method, url, body) => {
        let headers = {
            "Content-type": "application/json"
        }

        return fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: headers
        }).then(res => {
            if (res.ok) { return res.json() }
            return res.json().then(err => {
                const e = new Error("Something went wrong")
                e.data = err
                throw e
            })
        })
    }

    static addUserReq = (method, body, url) => {
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

    static updateUserReq = (method, body, url) => {
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

    static deleteUserReq = (method, url) => {
        return fetch(url, {
            method: method,
        }).then(res => {
            return "Deleted"
        }).catch(() => { console.log("Something went wrong") })
    }

    static greeting = () => {
        return "Hello Gleb"
    }
}