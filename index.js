const http = require("http"); 
const invent = require('./homework2.js'); 
const fs = require("fs"); 
const qs= require("querystring"); 

http.createServer((req,res) => { 
  const url = req.url.split("?"); 
    let path = url[0].toLowerCase(); 
    let query = qs.parse(url[1]); 
    


  switch(path) {  
  

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
      case '/removeItem': 
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
}).listen(process.env.PORT || 3000);






/* case '/get': 
    let found = invent.get(query.inventors); 
    res.writeHead(200, { 'Content-Type': 'text/plain'}); 
    let results = (found)? JSON>stringify(found):'not found'; 
    res.end(results);
    break; 
 */