const ecc = require('eosjs-ecc')

let privatekey = ecc.seedPrivate('your seed phrase')
let publickey = ecc.privateToPublic(privatekey)

console.log('EOS private key: ' + privatekey)
console.log('EOS public key: ' + publickey)
