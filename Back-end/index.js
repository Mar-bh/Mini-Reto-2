const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

require("dotenv").config();
const mysql = require("mysql2");

const DB = process.env.DATABASE_URL;
const connection = mysql.createConnection(DB);
const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");

connection.connect(function (err) {
  if (err) throw "Error: \t" + err;
  console.log("Connected!");
});

module.exports = app;

app.get('/datos', (req, res) => {
  connection.query('SELECT * FROM sounds', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
    console.log("Datos: \t" + results);
  });
});

app.use(express.static(path.resolve("front-end/build")));
// Todas las peticiones GET que no manejamos ahora regresarán nuestra React App
// Agrega esto antes del “app.listen”
app.get("*", (req, res) => {
    res.sendFile(path.resolve("front-end/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


// Local Database

// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'minireto'
// });


// ejemplo segundo endpoint
// app.get('/getCrickets', (req, res) => {
//     connection.query('SELECT * FROM sounds WHERE sound_id = 4', (error, results, fields) => {
//         if (error) throw error;
//         res.send(results);
//     });
// });

// module.exports = connection;

/*

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/hello', (req,res) => {
    res.json({ message: "Hello world!" });
});

const fs = require("fs");

app.get("/api/sounds", async(req, res) => {
    fs.readFile(__dirname + "/" + "sounds.json", "utf8", (err, data) => {
        console.log(data);
        res.end(data);
    });
});

app.use (bodyParser.json());

app.post("/api/sounds", (req, res) => {
    console.log("El cuerpo de la peticion: ", req.body); 
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});*/