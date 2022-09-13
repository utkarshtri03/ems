const { application } = require('express');
const express = require('express');
const app = express();

app.get("/utkarsh",(req, res) => {
    res.status(200).send("Hello Utkarsh");
});

app.listen(7000,() => {
    console.log("Server is listening on 7000");
});