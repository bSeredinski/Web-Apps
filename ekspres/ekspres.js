const express = require("express");
const app = express();
const fs = require("fs");
const port = 8080;
const path = require("path");

const output = path.join(__dirname, './assets/main.html');

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
})

app.get("/1", (req, res) => {
    res.status(200).json("Json text!");
})

app.get("/2", (req, res) => {
    res.status(200).send("<h1>HTML text</h1>");
})

app.get("/3", (req, res) => {
    res.status(200).sendFile(output);
})

app.get("/getparams", async (req, res) => {
    app.query = req.query;
    const timeStamp = Date.now();
    const fileName = (__dirname + `./assets${timeStamp}.json`);
    const filePath = path.join(__dirname, fileName);
    await fs.writeFile(filePath, JSON.stringify(filePath, null, 2), (err) => {});
    console.log(fileName);
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`);
})