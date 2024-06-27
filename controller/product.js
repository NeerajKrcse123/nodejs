import fs from "fs";
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
const createproduct = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
}
const getallproducts = (req, res) => {
    res.json(products); // here we will get all the products
}

const getsingleproduct = (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product.id === parseInt(id)); // here we will get the specific products by id example /products/3
    res.json(product);
}

const putproduct = (req, res) => {
    const id = req.params.id;
    const productIndex = products.findIndex(product => product.id === parseInt(id));
    products.splice(productIndex, 1, { ...req.body, id: parseInt(id) });
    res.json(products);

}

const patchproduct = (req, res) => {
    const id = req.params.id;
    const productIndex = products.findIndex(product => product.id === parseInt(id));
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body });
    res.json(products);

}

const deleteproduct = (req, res) => {
    const id = req.params.id;
    const productIndex = products.findIndex(product => product.id === parseInt(id));
    products.splice(productIndex, 1);
    res.json(products);

}
export { createproduct, deleteproduct, getallproducts, getsingleproduct, patchproduct, putproduct };
