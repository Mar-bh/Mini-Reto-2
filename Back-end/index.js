const bodyParser = require("body-parser");
const express = require("express");

require("dotenv").config();
const mysql = require("mysql2");

const DB = process.env.DATABASE_URL;
const connection = mysql.createConnection(DB);

connection.connect(function (err) {
  if (err) throw err;
});

const PORT = 3030;
const app = express();
const path = require("path");

app.use(bodyParser.json());

// GET
app.get("/datos", (req, res) => {
  connection.connect(function (err) {
    if (err) throw err;
    connection.query("SELECT * FROM sounds", (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });
});

app.use(express.static(path.resolve("client/build")));
// Todas las peticiones GET que no manejamos ahora regresarán nuestra React App
// Agrega esto antes del “app.listen”
app.get("*", (req, res) => {
  res.sendFile(path.resolve("client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});