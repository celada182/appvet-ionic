// Set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

// Configuration
mongoose.connect('mongodb://127.0.0.1/appvet');
const port = 8080;

app.use(bodyParser.urlencoded({extended: false})); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(cors());

//Model
var Paciente = mongoose.model('Paciente', {
    nombre: String,
    propietario: String,
    direccion: String,
    microchip: Number,
    especie: String,
    fechaNacimiento: String,
    sexo: Boolean,
    castrado: Boolean,
    peso: Number,
    telefono: String,
    dieta: String,
    actividad: String,
    consultas: [{
        fecha: String,
        motivo: String,
        diagnostico: String,
        observaciones: String
    }]
});

app.delete('/api/pacientes/clear', function (req, res) {
    Paciente.remove({}, function(err) {
        if (err) res.send(err);
        else res.send({msg: 'clear'});
    });
});

app.post('/api/pacientes/create', function (req, res) {
    while (req.body.length) {
        var paciente = new Paciente(req.body.pop());
        paciente.save(function (err) {
            if (err) res.send(err);
        });
    }
    res.send({msg: 'Pacientes guardados'});
});

/*

 app.get('/api/usuarios/read', function (req, res) {
 Usuario.find({}, function (err, usuarios) {
 if (err) {
 res.send(err);
 }
 res.send(usuarios);
 });
 });

 app.put('/api/usuarios/update', function (req, res) {
 Usuario.findById(req.body._id, function (err, usuario) {
 if (err) {
 res.status(500).send(err);
 } else {
 usuario.nombre = req.body.nombre || usuario.nombre;
 usuario.email = req.body.email || usuario.email;
 usuario.save(function (err, usuario) {
 if (err) {
 res.status(500).send(err)
 }
 res.send(usuario);
 });
 }
 });
 });

 app.delete('/api/usuarios/delete', function (req, res) {
 console.log(req.query);
 Usuario.findByIdAndRemove(req.query._id, function (err, usuario) {
 var response = {
 message: "Usuario borrado",
 _id: usuario._id
 };
 res.send(response);
 });
 });*/

// listen
app.listen(port);
console.log("Server listening on port " + port);
