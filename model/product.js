import mongoose from "mongoose";
const productschema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountpercentage: Number,
    rating: Number,
    category: String,
    brand: String,
    thumbnail: String,
    images: [String]
});

export const product = mongoose.model("product", productschema);