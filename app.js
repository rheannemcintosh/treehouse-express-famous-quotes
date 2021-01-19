//Import Express
const express = require('express');

//Create an Express Application
const app = express();

// Input records.js
const records = require('./records');

// Express Middleware - Tell Results are Expected as JSON
app.use(express.json());

// Send a GET request to /quotes to READ (view) a list of quotes
app.get('/quotes', async (req, res) => {
    try {
        const quotes = await records.getQuotes();
        res.json(quotes);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Send a GET request to /quotes/:id to READ(view) a quote
app.get('/quotes/:id', async (req, res) => {
    try {
        const quote = await records.getQuote(req.params.id);
        if (quote) {
            res.json(quote);
        } else {
            res.status(404).json({message: "Sorry! Quote not found!"});
        }
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

// Send a POST request to /quotes to CREATE a new quote
// Send a PUT request to /quotes/:id to UPDATE (edit) a quote
// Send a DELETE request to /quotes/:id to DELETE a quote
// Send a GET request to /quotes/quote/random to READ (view) a random quote

//Listen on port 3000
app.listen(3000, () => console.log('Quote API listening on port 3000!'));
