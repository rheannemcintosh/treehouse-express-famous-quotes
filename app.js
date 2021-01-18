//Import Express
const express = require('express');

//Create an Express Application
const app = express();

//Listen on port 3000
app.listen(3000, () => console.log('Quote API listening on port 3000!'));

const data = {
    quotes: [
        {
            id: 8721,
            quote: "We must accept finite disappointment, but we must never lose infinite hope.",
            author: "Martin Luther King"
        },
        {
            id: 5779,
            quote: "Use what you’ve been through as fuel, believe in yourself and be unstoppable!",
            author: "Yvonne Pierre"
        },
        {
            id: 3406,
            quote: "To succeed, you have to do something and be very bad at it for a while. You have to look bad before you can look really good.",
            author: "Barbara DeAngelis"
        }
    ]
}