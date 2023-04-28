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


// GET
app.get('/datos', (req, res) => {
  connection.query('SELECT * FROM sounds', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/playlist', (req, res) => {
  connection.query('SELECT * FROM playlist_configuration', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
    console.log("Playlists: \t" + results);
  });
});

app.get('/theme', (req,res) => {
  connection.query("SELECT * FROM playlist JOIN playlist_sounds ON playlist.playlist_id = playlist_sounds.playlist_id"  , (error, results, fields) => {
    if (error) throw error;
    res.send(results);
    console.log("Playlists: \t" + results);
  });
})

app.get('/theme/:id', (req,res) => {
  connection.query("SELECT * FROM playlist JOIN playlist_sounds ON playlist.playlist_id = playlist_sounds.playlist_id WHERE playlist.playlist_id="+ req.params.id , (error, results, fields) => {
    if (error) throw error;
    res.send(results);
    console.log("Playlists: \t" + results);
  });
})

app.get('/playlist/:id', (req, res) => {
  connection.query('SELECT * FROM playlist_configuration WHERE id_configuration  = ' + req.params.id, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
    console.log("Playlist: \t" + results + "Id: \t" + req.params.id);
  });
});

// POST
app.post('/playlist', (req, res) => {
  connection.query('SELECT * FROM sounds', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
    console.log("Datos: \t" + results);
  });
});

// PUT
app.put('/playlist/:id', (req, res) => {
  connection.query('SELECT * FROM sounds', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
    console.log("Datos: \t" + results);
  });
});

// DELETE
app.delete('/playlist/:id', (req, res) => {
  connection.query('DELETE FROM playlist_configuration WHERE id_configuration = ' + req.params.id, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
    console.log("Datos: \t" + results);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(express.static(path.resolve("client/build")));
// Todas las peticiones GET que no manejamos ahora regresarán nuestra React App
// Agrega esto antes del “app.listen”
app.get("*", (req, res) => {
    res.sendFile(path.resolve("client/build", "index.html"));
});


module.exports = app;
