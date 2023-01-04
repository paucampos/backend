"use strict";

const Client = require("../models/client.model");
const bcrypt = require("bcrypt-nodejs");

const registroCliente = async (req, res) => {
  let data = req.body;
  let clientList = [];
  // Search client
  clientList = await Client.find({ email: data.email });

  if (clientList.length === 0) {
    if (data.password) {
      bcrypt.hash(data.password, null, null, async function (err, hash) {
        if (hash) {
          data.password = hash;
          // Insert client
          const reg = await Client.create(data);
          res.status(200).send({ data, mesage: reg });
        } else {
          res.status(200).send({ data: undefined, mesage: "Error server." });
        }
      });
    } else {
      res.status(200).send({ data: undefined, mesage: "Debe ingresar una contraseña." });
    }
  } else {
    res.status(200).send({ data: undefined, mesage: "El correo ya existe." });
  }
};

module.exports = {
  registroCliente
};
