//task-1
const http = require("http");
const port = 3000;
const host = 'localhost'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.method === 'GET')
    res.end("Called using GET method");
  else if (req.method === 'POST')
    res.end("Called using POST method");
  else if (req.method === 'PUT')
    res.end("Called using PUT method");
  else if (req.method === 'DELETE')
    res.end("Called using DELETE method");
}).listen(port, () => {
  console.log(`server is running on ${port}`);
})