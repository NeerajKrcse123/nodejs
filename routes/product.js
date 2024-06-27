import express from 'express';
import { createproduct, deleteproduct, getallproducts, getsingleproduct, patchproduct, putproduct } from "../controller/product.js";

const productRouter = express.Router();

export default productRouter.post("/", createproduct)
    .get("/", getallproducts)
    .get("/:id", getsingleproduct)
    .put("/:id", putproduct)
    .patch("/:id", patchproduct)
    .delete("/:id", deleteproduct)


