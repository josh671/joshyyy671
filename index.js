const http = require("http"); 
const inventors = require('./homework2'); 
const fs = require("fs"); 


http.createServer((req,res) => { 
 
  //console.log(inventors);
  const path = req.url.toLowerCase();
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

      case '/get': 
      let found = inventors.get(query.first); 
      res.writeHead(200, { 'Content-Type': 'text/plain'}); 
      let results = (get) ? JSON.stringify(found): "notfound"; 
      res.end('Results for ' + req.query.first + "\n" + results) ; 
      break; 

     
      
      case '/getAll':
      let getAll = inventors.getAll(); 
      res.writeHead(200, { 'Content-Type': 'text/plain'}); 
      let results1 = (getAll) ? JSON.stringify(getAll): "notfound"; 
      res.end('Results for ' + req.query.inventors + "\n" + results1) ; 
      break; ;
      
     

    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);



