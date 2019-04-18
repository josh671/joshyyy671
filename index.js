const http = require("http"); 
const inventors = require('./homework2'); 
const fs = require("fs"); 
const qs= require("querystring"); 

http.createServer((req,res) => { 
 
  //console.log(inventors);
  
  const url = req.url.toLowerCase(). split("?"); 
    let path = url[0]; 
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



      case '/get': 
      let found = inventors.get(query.first); 
      //console.log( path);
     // console.log(query);
     console.log(found); 
      res.writeHead(200, { 'Content-Type': 'text/plain'}); 
      let results = (found) ? JSON.stringify(found): "notfound"; 
      res.end('Results for ' + query.first + "\n" + results) ; 
      break; 

     
      
      case '/getAll':
      let getAll = inventors.getAll(); 
      console.log(getAll);
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



