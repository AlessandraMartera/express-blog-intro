const express = require('express');
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

const home = require("./controllers/home.js");

const posts = require("./controllers/posts.js");

app.get("/", home.index);
/*
app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog! da app.js</h1>');
   })
*/
app.listen(port, () => {
 console.log(`Server partito su porta http://localhost:${port}`)
})
