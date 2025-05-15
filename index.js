const { generateRandomNIM } = require('./app/utils/random');
const bruteForceLoginToURL = require('./app/services/bruteForceService');
const config = require('./app/config/config');

const nim = config.credential;

console.log(`🎯 Target URL: ${config.loginUrl}`);
console.log(`🔍 Credential digunakan: ${nim}`);
console.log(`🚀 Mulai brute force dengan max ${config.maxAttempts} percobaan...\n`);

bruteForceLoginToURL(nim, config.loginUrl, config.maxAttempts);
