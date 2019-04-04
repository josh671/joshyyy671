const http = require("http"); 
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
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);
