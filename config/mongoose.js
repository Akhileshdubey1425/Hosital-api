// This file is used to set connection with the database
const mongoose = require("mongoose");


mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex",true);
mongoose.set("useUnifiedTopology", true);

//Name of the database for product api
mongoose.connect("mongodb://localhost/covid19-api");

const db = mongoose.connection;

// for Error
db.on("error",console.error.bind(console, "ERROR CONNECTING TO DATABASE!! "));

// on success
db.once("open", () =>{
    console.log("Connected to database ");

});

module.exports = db;