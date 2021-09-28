//We import the express library
const express = require('express');
//Creating the application object
const app = express();
//Import my drink data
const drinks = require('./models/drinks');
//Import my food data
const food = require('./models/food');

// INDEX ROUTE 
app.get('/drinks', (req, res) => {
    res.render("drinks_index.ejs", {allDrinks: drinks});
  });

app.get('/food', (req, res) => {
    res.render("food_index.ejs", {allFood: food});
  });

// SHOW ROUTE
app.get('/drinks/:id', (req, res) => {
    res.render("drinks_show.ejs", {drink: drinks[req.params.id]});
});

app.get('/food/:id', (req, res) => {
    res.render("food_show.ejs", {item: food[req.params.id]});
});


//The Server Listener
app.listen(3000, () => {
    console.log('listening');
});