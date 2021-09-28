//We import the express library
const express = require('express');
//Creating the application object
const app = express();
//Import my drink data
const drinks = require('./models/drinks');

// INDEX ROUTE 
app.get('/drinks', (req, res) => {
    res.render("drinks_index.ejs", {allDrinks: drinks});
  });

// SHOW ROUTE
app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render("drinks_show.ejs", {drink: drinks[req.params.indexOfDrinksArray]});
});

//The Server Listener
app.listen(3000, () => {
    console.log('listening');
});