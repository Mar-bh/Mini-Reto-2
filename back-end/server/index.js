//server

const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Sever listening on ${PORT}`)
});

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello!" });
});