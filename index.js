import express from 'express';
const server = express();


const auth = (req, res, next) => {
    console.log(req.query);
    if (req.query.password) {
        next();
    }
    else {
        res.sendStatus(401);
    }
}

// server.use(auth); // if we  do like that then it will applicable for all routes means whatever we write below  we have written  get  and post  so here middleware will applicable for both 


// if we want to use for specific route then directly in the method




server.get("/", auth, (req, res) => {
    res.json({ type: "get" });
})
server.post("/", (req, res) => {
    res.json({ type: "post" });
})



server.listen(8080, () => {
    console.log('server is running on port 8080');
});