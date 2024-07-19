import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";

const MONGODB_DBNAME = "EcommerceTest"


// db connection
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`${process.env.MONGODB_URI}/${MONGODB_DBNAME}`);

    console.log("database connected");
}



const server = express();
server.use(express.json());
server.use("/api/v1/products", productRouter);
server.use("/api/v1/users", userRouter);




server.listen(process.env.PORT, () => {
    console.log('server is running on port 8080');
});