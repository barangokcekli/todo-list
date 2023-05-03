//jshint esversion:6
const express = require('express');
const port = 4000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Items list
let items = [];
// Date
let today = new Date()
let todayString = today.toLocaleDateString("tr-TR");
let year = today.getFullYear();

app.get("/", function(req, res){
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