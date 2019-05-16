'use strict'
const express = require ("express");
const bodyParser = require('body-parser'); 
const app = express();
//const invent = require('./homework2.js'); 
const inventDB = require('./models/inventor');



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


  //getAll/////////////////////////////////////////////////////
 app.get('/getAll',( req , res) => { 
    res.end(JSON.stringify(invent.getAll())); 

 });


 //get post method with mongodb//////////////////////////////////////////////////////////////////////////////////////
app.get('/get', (req,res,next)=>{
  console.log(req.body.inventorFirst);
  inventDB.findOne({'first':req.body.inventorFirst} ,(err,found)=>{ 
    if(err) return next(err); 
    res.type('text/html');
    res.render('detail', {result:found})
  });
});


 app.post('/detail', (req, res, next)=> { 
  inventDB.findOne({'first' :req.body.inventorFirst}).then((found)=>{
    console.log(found); 
    res.render("detail", { result:found});
  }).catch((err) =>{ 
    return next (err);
  });
});

  
 /*app.post('/get', function(req,res){
  var found = invent.get(req.body.inventorFirst);
  res.render("detail", {title: req.body.inventorFirst, result: found});
})*/

 //////////////////////////////////////////////////////////////

//DELETE METHOD////////////DELETE METHOD//////////
app.get('/delete', (req, res, ) => { 
inventDB.deleteOne({'first': req.query.first}).then((result)=>{
  console.log(result);
  res.render("delete", {first: req.query.first, deleted: result.deleteCount})
})
});
/* app.get('/delete', (req,res)=>{
  console.log(req.query);
  let result = invent.delete(req.query.first); // delete book object
 // console.log(result); 
  res.render('delete', {title: req.body.first, result: result});
}); */


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






