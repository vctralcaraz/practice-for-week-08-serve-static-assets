const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  const subs = req.url.split('/');

  if(req.url.startsWith('/static')) {
    if(req.method === 'GET') {
      if(subs[2] === 'images') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpeg');

        const fileContents = fs.readFileSync(`./assets/${subs[2]}/${subs[3]}`);

        return res.end(fileContents);
      }
      if(subs[2] === 'css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');

        const fileContents = fs.readFileSync(`./assets/${subs[2]}/${subs[3]}`);

        return res.end(fileContents);
      }
    }
  }

  if(req.method === 'GET' && req.url === '/') {
    const fileContents = fs.readFileSync('./index.html', 'utf-8');
  
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
  
    return res.end(fileContents);
  }

});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));