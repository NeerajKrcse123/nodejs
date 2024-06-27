import express from 'express';
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
;
const server = express();
server.use(express.json());
server.use("/api/v1/products", productRouter);
server.use("/api/v1/users", userRouter);




server.listen(8080, () => {
    console.log('server is running on port 8080');
});