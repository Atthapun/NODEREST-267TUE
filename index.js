const express = require("express");
const app = express();
const prot = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port,
    () => {
        console.log('Example app listening at http://localhost:${port}');
    });