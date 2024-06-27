import express from 'express';
import { createuser, deleteuser, getallusers, getsingleuser, patchuser, putuser } from "../controller/user.js";

const userRouter = express.Router();

export default userRouter.post("/", createuser)
    .get("/", getallusers)
    .get("/:id", getsingleuser)
    .put("/:id", putuser)
    .patch("/:id", patchuser)
    .delete("/:id", deleteuser)


