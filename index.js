import fs from 'fs';
import http from 'http';
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.product;

const server = http.createServer((req, res) => {

    if (req.url.startsWith("/products")) {
        const id = parseInt(req.url.split("/")[2]);
        const product = products.find(p => p.id === id);
        res.setHeader('Content-Type', 'text/html');
        let modifieddata = index.replace("titles", product.title).replace("bodys", product.body)
        res.end(modifieddata);
    }
    // switch (req.url) {
    //     case '/products':
    //         res.setHeader('Content-Type', 'text/html');
    //         let modifieddata = index.replace("titles", product.title).replace("bodys", product.body);
    //         res.end(modifieddata);
    //         break;
    //     default:
    //         res.writeHead(404, { 'Content-Type': 'text/html' });
    //         res.write('Not Found');
    //         res.end();
    // }
})
server.listen(8080, () => {
    console.log("server started")
})