'use strict'

const { application } = require('express');
const express = require('express');
const clientController = require('../controllers/client.controller');

const api = express.Router();

api.post('/registro_cliente', clientController.registroCliente);

module.exports = api;