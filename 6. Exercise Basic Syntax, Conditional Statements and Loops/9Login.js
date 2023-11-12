function login(arr) {
    let username = arr[0]
    let counter = 0
    for (i = 1; i < arr.length; i++) {
        let password = arr[i].split("")
        password = password.reverse()
        password = password.join("")
        if (username == password) {
            console.log(`User ${username} logged in.`)
        } else {
            counter += 1
            if (counter == 4) {
                console.log(`User ${username} blocked!`)
                break
            }
            console.log("Incorrect password. Try again.")
        }
    }
}