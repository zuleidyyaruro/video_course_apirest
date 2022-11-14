const db = require("../utils/database");
const User = require("../models/user.model");
const initModel = require("../models/initModels");

initModel();

const users = [
    {first_name: "Andrea", last_name: "Torres", password: "1234", email: "andrea@gmail.com"},
    {firstName: "Jose", lastName: "Jaramillo", password: "1234", email: "jose@gmail.com"},
    {firstName: "Manuel", lastName: "Quintero", password: "1234", email: "manuel@gmail.com"},
];

db.sync({force: true})
    .then(() => {
        console.log("Iniciando la plantación de Información");
        users.forEach((user) => User.create(user));
        // setTimeout(() => {
        //     addresses.forEach((address) => Address.create(address));
        // }, 100);
    })
    .catch((error) => console.log(error));

