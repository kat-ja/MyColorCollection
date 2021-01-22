const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const colors = require('./colors.json');

//console.log(colors);


// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

// setting
app.set('view engine', 'ejs');


let nameOfColor = '';
let valueOfColor = '';


// routes
app.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname, 'colors.json'));
    res.render('colors', {
        colors: colors,
        colorName: nameOfColor,
        colorValue: valueOfColor
    });
})

// to do: append to json not write again? https://stackoverflow.com/questions/36856232/write-add-data-in-json-file-using-node-js
app.post('/add-color', (req, res, next) => {
    //console.log(req.body);
    let nameOfColor = req.body.colorName;
    let valueOfColor = req.body.colorValue;
    let newColor = { color: nameOfColor, value: valueOfColor };
    colors.push(newColor);
    let json = (JSON.stringify(colors));
    //console.log(json);
    fs.writeFile('colors.json', json, 'utf-8', err => {
        if(err){
            console.log(err);
        }else{
            console.log('ready');
        }
    });
    res.redirect('/');
   // console.log(colors);
})
// to do: delete route
// how to implement delete option in ui?
// colorful page title

app.listen(3000);