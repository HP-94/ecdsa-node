const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const { ethers } = require("ethers");

app.use(cors());
app.use(express.json());

const { secp256k1 } = require('ethereum-cryptography/secp256k1');
const { toHex } = require('ethereum-cryptography/utils');

const alicePrivateKey = secp256k1.utils.randomPrivateKey();
const benPrivateKey = secp256k1.utils.randomPrivateKey();
const bobPrivateKey = secp256k1.utils.randomPrivateKey();

const alicePublicKey = secp256k1.getPublicKey(alicePrivateKey);
const benPublicKey = secp256k1.getPublicKey(benPrivateKey);
const bobPublicKey = secp256k1.getPublicKey(bobPrivateKey);

const aliceAddress = getAddressFromPublicKey(alicePublicKey);
const benAddress = getAddressFromPublicKey(benPublicKey);
const bobAddress = getAddressFromPublicKey(bobPublicKey);

console.log('Alice public key:', alicePublicKeyHex);
console.log('Alice private key:', alicePrivateKeyHex);
console.log('Ben public key:', benPublicKeyHex);
console.log('Ben private key:', benPrivateKeyHex);
console.log('Bob public key:', bobPublicKeyHex);
console.log('Bob private key:', bobPrivateKeyHex);

const balances = {
  [aliceAddress]: 100, // Alice
  [benAddress]: 50, // Ben
  [bobAddress]: 75, // Bob
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

function getAddressFromPublicKey(publicKey) {
  const publicKeyBytes = Buffer.from(publicKey.slice(2), "hex");
  const hash = ethers.utils.keccak256(publicKeyBytes);
  const address = hash.slice(-20).toString("hex");
  return address;
}
