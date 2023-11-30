const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  const fileContents = fs.readFileSync('./index.html', 'utf-8');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  res.end(fileContents);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));