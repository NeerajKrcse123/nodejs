import express from 'express';
import fs from 'fs';
const server = express();
// const index = fs.readFileSync('./index.html', 'utf-8');
const data = fs.readFileSync('./data.json', 'utf-8');
// server.get("/", (req, res) => {
//     // res.send(index)
//     // res.send("hello neeraj");
//     res.send(data)
// })


server.use((req, res, next) => {
    console.log(req.method, req.url) // middleware
    next();
})


server.get("/", (req, res) => {
    res.json({ type: "get" });
})
// server.post("/", (req, res) => {
//     res.json({ type: "post" });
// })
// server.patch("/", (req, res) => {
//     res.json({ type: "patch" });
// })
// server.put("/", (req, res) => {
//     res.json({ type: "put" });
// })
// server.delete("/", (req, res) => {
//     res.json({ type: "delete" });
// })


server.listen(8080, () => {
    console.log('server is running on port 8080');
});