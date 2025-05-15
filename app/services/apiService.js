const axios = require('axios');

async function tryLogin(url, nim, password) {
    try {
        const res = await axios.post(url, { nim, password });

        if (res.status === 200 && res.data?.token) {
            return true;
        }
    } catch (err) {
        return
    }
    return false;
}

module.exports = tryLogin;
