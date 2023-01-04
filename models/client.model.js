'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = Schema({
    names: {
        type: String,
        required: true
    },
    lastnames: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    profile: {
        type: String,
        default: 'perfil.png',
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    birthday: {
        type: String,
        required: false
    },
    dni: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('client', ClientSchema);