//Import Express
const express = require('express');

//Create an Express Application
const app = express();

//Listen on port 3000
app.listen(3000, () => console.log('Quote API listening on port 3000!'));
