//Importing module http
const http = require('http');
const port = 3000;

const server = http.createServer((req,res) =>{
    res.write('Hello World');
    res.end();
}).listen(port, () => {
    console.log(`Server Listening on port ${port}`);
});