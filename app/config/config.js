require('dotenv').config();

const config = {
    loginUrl: process.env.LOGIN_URL || 'http://localhost:3000/login',
    maxAttempts: parseInt(process.env.MAX_ATTEMPTS) || 10000,
    passwordLength: parseInt(process.env.PASSWORD_LENGTH) || 8,
    credential: parseInt(process.env.CREDENTIAL) || 0
};

module.exports = config;
