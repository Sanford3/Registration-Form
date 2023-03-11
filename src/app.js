const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
require("./db/conn");

app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    res.render("index");
})

// Server might not always be at 3000, so we write line 4
// app.listen(3000, ()=>{
//     console.log("Server is running at port 3000");
// });

app.listen(port, ()=>{
    console.log(`Listening to port number ${port}`);
})