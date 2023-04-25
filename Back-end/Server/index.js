const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const bodyParser = require("body-parser");

const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'minireto'
});

app.listen(3000, () => {
  console.log('API RESTful escuchando en el puerto 3000');
});

app.get('/datos', (req, res) => {
  connection.query('SELECT * FROM sounds', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});


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