require("dotenv").config();
const express = require("express"); //  commonjs
// import express from "express"; //es module
const configViewEngine = require("./config/viewEngine");
const app = express(); //app express
const webRoutes = require("./routes/web");

console.log(process.env.PORT);
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

app.use("/", webRoutes);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
