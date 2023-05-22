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

// Alice public key: 02a145f350a11804e37ee272b9428dfdd7633176fabb2b10b354bc88ff5e824fdf
// Alice private key: 222516e8f89248e8d29e4fd174720ac166d0496c140723ffff3452c61bb973ce
// Ben public key: 0325057d2d52a27466f6a5a0c374c279abead351e90ff13aad68ffc3a372e42815
// Ben private key: 806e3b64fbaecdde91813de11151b53019a987dcc11d8501fbbd128179e37ac2
// Bob public key: 03d07bb3808b94f24a38803cab7d04477c22acbf9ba0017c046b59e4b5b1f412c9
// Bob private key: 59264a58d7fe39dec0b4aaf8718b35333572385ef09cff4db65e83386cb4ad13