const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "02a145f350a11804e37ee272b9428dfdd7633176fabb2b10b354bc88ff5e824fdf": 100, // Alice
  "0325057d2d52a27466f6a5a0c374c279abead351e90ff13aad68ffc3a372e42815": 50, // Ben
  "03d07bb3808b94f24a38803cab7d04477c22acbf9ba0017c046b59e4b5b1f412c9": 75, // Bob
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
