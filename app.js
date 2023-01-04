"use strict";

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 4201;

const clientRoute = require('./routes/client.route');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/tienda", (err, res) => {
  if (err) console.log(err);
  else {
    app.listen(port, () => console.log("Servidor corriendo en puerto " + port));
  }
});

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json({
  limit: '50mb',
  extended: true
}));

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

app.use('/api', clientRoute);

module.exports = app;
