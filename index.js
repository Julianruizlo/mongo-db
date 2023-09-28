const app = require ("./app");
const mongoose = require("mongoose");
mongoose.connect("mongodb://local127.0.0.1:27017/clase3").then(()=> console.log("BD conectada"));

app.listen(8000 , () => console.log ("Conectado"));