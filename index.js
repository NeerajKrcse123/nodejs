import express from 'express';
import fs from 'fs';

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.product;
const server = express();
server.use(express.json());



// create api  by post
server.post("/products", (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
})

// get api 
server.get("/products", (req, res) => {
    res.json(products); // here we will get all the products
})

server.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product.id === parseInt(id)); // here we will get the specific products by id example /products/3
    res.json(product);
})


server.put("/products/:id", (req, res) => {
    const id = req.params.id;
    const productIndex = products.findIndex(product => product.id === parseInt(id));
    products.splice(productIndex, 1, { ...req.body, id: parseInt(id) });
    res.json(products);

})
server.patch("/products/:id", (req, res) => {
    const id = req.params.id;
    const productIndex = products.findIndex(product => product.id === parseInt(id));
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body });
    res.json(products);

})

server.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    const productIndex = products.findIndex(product => product.id === parseInt(id));
    products.splice(productIndex, 1);
    res.json(products);

})







server.listen(8080, () => {
    console.log('server is running on port 8080');
});