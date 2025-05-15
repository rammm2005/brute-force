class User {
    constructor(nim, password) {
        this.nim = nim;
        this.password = password;
    }

    login(inputNim, inputPassword) {
        return this.nim === inputNim && this.password === inputPassword;
    }
}

module.exports = User;
