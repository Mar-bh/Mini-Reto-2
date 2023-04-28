const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

require("dotenv").config();
const mysql = require("mysql2");

const DB = process.env.DATABASE_URL;
const connection = mysql.createConnection(DB);
const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

// GET
app.get("/datos", (req, res) => {
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
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
  console.log(`Server listening on ${PORT}`);
});