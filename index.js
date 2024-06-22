import express from 'express';
const app = express();
console.log('hello world');
app.listen(3000, () => {
    console.log('server is running on port 3000');
});

