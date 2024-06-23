import fs from 'fs';
import http from 'http';
// const index = fs.readFileSync('./index.html', 'utf-8');
// const data = { name: 'Jane', age: 25 };
const jsondata = fs.readFileSync('./data.json', 'utf-8');
const server = http.createServer((req, res) => {
    // res.end('Hello World')
    console.log(req.url);
    // res.setHeader('Content-Type', 'application/json'); // we can set the header also
    // res.end(JSON.stringify(data));
    // res.end(index);
    res.end(jsondata);
})
server.listen(8080, () => {
    console.log("server started")
})