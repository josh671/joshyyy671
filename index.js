const http = require("http"); 
const inventors = require('./homework2'); 

http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {
    case '/':
     // res.writeHead(200, {'Content-Type': 'text/plain'});
     // res.end('home.html');
     const fs = require("fs");
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

      case '/get': 
      let get = inventors.get(query.first); // get book object 
      res.writeHead(200, { 'Content-Type': 'text/plain'}); 
      let results = (get) ? JSON.stringify(found): "notfound"; 
      res.end('Results for ' + req.query.first + "\n" + results) ; 
      break; 




    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);



