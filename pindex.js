'use strict'
const express = require ("express");
const bodyParser = require('body-parser'); 
const app = express();
const invent = require('./homework2.js'); 
const qs= require("querystring");  


app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions



// send static file as response
app.get('/', (req, res) => {
    res.type('text/html');
    res.sendFile(__dirname + '/public/home.html'); 
   });

 app.get('/getAll',( req , res) => { 
    res.end(JSON.stringify(invent.getAll())); 

 });

 app.get('/get', (req, res) => {
res.type('text/html');
res.end(JSON.stringify(invent.get()));

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


   
  
/*
    case '/':
     // res.writeHead(200, {'Content-Type': 'text/plain'});
     // res.end('home.html');
   
     fs.readFile("public/home.html", (err, data) => {
       if (err) return console.error(err);
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.end(data.toString());
      });

      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('about.html');
      break; 

    //case/break for getAll() 
    case '/getall': 
    res.end(JSON.stringify(invent.getAll()));
    break; 

   
//case/break for get() 
      case '/get': 
      let found = invent.get(query.first); 
    
      res.writeHead(200, { 'Content-Type': 'text/plain'}); 
      let results = (found) ? JSON.stringify(found): "notfound"; 
      res.end( results) ; 
      break; 




//case/break for removeItem() 
      case '/removeitem': 
      console.log(query.first)
      let rid = invent.removeItem(query.first); 

      res.writeHead(200, { 'Content-Type': 'text/plain'}); 
      let itemDelete = (rid) ? JSON.stringify(rid): "notfound"; 
      res.end(itemDelete) ; 
      break; 

      

    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    } 

    */


    app.listen(app.get('port'), () => { 
        console.log('express has started');
    });






/* case '/get': 
    let found = invent.get(query.inventors); 
    res.writeHead(200, { 'Content-Type': 'text/plain'}); 
    let results = (found)? JSON>stringify(found):'not found'; 
    res.end(results);
    break; 
 */