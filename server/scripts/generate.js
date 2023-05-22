const { secp256k1 } = require('ethereum-cryptography/secp256k1');
const { toHex } = require('ethereum-cryptography/utils');

// Generate private keys for Alice, Ben, and Bob
const alicePrivateKey = secp256k1.utils.randomPrivateKey();
const benPrivateKey = secp256k1.utils.randomPrivateKey();
const bobPrivateKey = secp256k1.utils.randomPrivateKey();

// Derive public keys from the private keys
const alicePublicKey = secp256k1.getPublicKey(alicePrivateKey);
const benPublicKey = secp256k1.getPublicKey(benPrivateKey);
const bobPublicKey = secp256k1.getPublicKey(bobPrivateKey);

// Convert private and public keys to hexadecimal strings
const alicePrivateKeyHex = toHex(alicePrivateKey);
const benPrivateKeyHex = toHex(benPrivateKey);
const bobPrivateKeyHex = toHex(bobPrivateKey);
const alicePublicKeyHex = toHex(alicePublicKey);
const benPublicKeyHex = toHex(benPublicKey);
const bobPublicKeyHex = toHex(bobPublicKey);

// Print the private and public keys for Alice, Ben, and Bob
console.log('Alice public key:', alicePublicKeyHex);
console.log('Alice private key:', alicePrivateKeyHex);
console.log('Ben public key:', benPublicKeyHex);
console.log('Ben private key:', benPrivateKeyHex);
console.log('Bob public key:', bobPublicKeyHex);
console.log('Bob private key:', bobPrivateKeyHex);