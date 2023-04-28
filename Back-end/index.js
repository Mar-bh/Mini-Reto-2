const express = require('express');

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/hello', (req,res) => {
    res.json({ message: "Hello world!" });
});

const fs = require("fs");

app.get("/api/sound", async(req, res) => {
    fs.readFile(__dirname + "/" + "sound.json", "utf8", (err, data) => {
        console.log(data);
        res.end(data);
    });
});

app.use (bodyParser.json());

app.post("/api/sound", (req, res) => {
    console.log("El cuerpo de la peticion: ", req.body); 
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
