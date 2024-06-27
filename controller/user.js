import fs from "fs";
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;
const createuser = (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json(req.body);
}
const getallusers = (req, res) => {
    res.json(users); // here we will get all the users
}

const getsingleuser = (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id)); // here we will get the specific users by id example /users/3
    res.json(user);
}

const putuser = (req, res) => {
    const id = req.params.id;
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    users.splice(userIndex, 1, { ...req.body, id: parseInt(id) });
    res.json(users);

}

const patchuser = (req, res) => {
    const id = req.params.id;
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    const user = users[userIndex];
    users.splice(userIndex, 1, { ...user, ...req.body });
    res.json(users);

}

const deleteuser = (req, res) => {
    const id = req.params.id;
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    users.splice(userIndex, 1);
    res.json(users);

}
export { createuser, deleteuser, getallusers, getsingleuser, patchuser, putuser };
