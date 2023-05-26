const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef is coming");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find((chef) => chef.id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Chef is prepared ${port}`);
});
