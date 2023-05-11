const express = require("express");
const app = express();
const port = 3000;

const pokemon = require("./models/pokemon.js");

app.set("view engine", "jsx"); //sets the view engine to jsx
app.engine("jsx", require("jsx-view-engine").createEngine()); //sets the view engine to jsx

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.render('./Index', {pokemon: pokemon});
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
