//jshint esversion:6
const express = require('express');
const date = require(__dirname + "/public/js/date.js");
const port = 4000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Items list
let items = [];

app.get("/", function(req, res){
    const todayString = date.getDate();
    const year = date.getYear();
    res.render("index",{items: items, title:"Home", todayString: todayString, year: year});
})
app.post("/", function(req, res){
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    console.log(`USER INPUT: ${req.body.itemInput}`);
    let userInput = req.body.itemInput;
    items.push(userInput);
    console.log(`items: ${items}`);
    res.redirect("/");
    
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})