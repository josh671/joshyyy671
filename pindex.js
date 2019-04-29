'use strict'
const express = require ("express");
const bodyParser = require('body-parser'); 
const app = express();
const invent = require('./homework2.js'); 



app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions

let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

// send static file as response
app.get('/', (req, res) => {
    res.type('text/html');
    res.sendFile(__dirname + '/public/home.html'); 
   });


 app.get('/getAll',( req , res) => { 
    res.end(JSON.stringify(invent.getAll())); 

 });

 app.post('/get', function(req,res){
  console.log(req.body)
 
  var found = invent.get(req.body.inventorFirst);
  res.render("detail", {title: req.body.inventorFirst, result: found});
});

 


 app.get('/delete', function(req,res){
  let result = invent.delete(req.query.inventorFirst); // delete book object
  res.render('delete', {title: req.query.inventorFirst, result: result});
});  


   // send plain text response
   app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About page');
   });



   // define 404 handler
   app.use( (req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
   });



    app.listen(app.get('port'), () => { 
        console.log('express has started');
    });






