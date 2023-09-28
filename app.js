const express = require("express");
const app = express();
const UserRoute = require("./Routes/UserRoute");


app.use(express.json());
app.use(UserRoute);

module.exports = app;