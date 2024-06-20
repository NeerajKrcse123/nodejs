
const add = (a, b) => {
    return a + b;
}
console.log(fs.readFileSync("demo.txt", "utf-8"))// this we have used synchronous file system



// this is asysnchronous file system
// fs.readFile("demo.txt", "utf-8", (err, text) => {
//     console.log(text)
// })

console.log(add(1, 2));

