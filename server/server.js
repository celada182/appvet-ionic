// Set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
mongoose.Promise = global.Promise;
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
    Paciente.remove({}, function (err) {
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

//Show IP
var os = require('os');
var ifaces = os.networkInterfaces();
Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;
    ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
        }
        if (alias >= 1) {
            // this single interface has multiple ipv4 addresses
            console.log('Direccion IP: ' + ifname + ':' + alias, iface.address);
        } else {
            // this interface has only one ipv4 adress
            console.log('Direccion IP: ' + ifname, iface.address);
        }
        ++alias;
    });
});

// listen
// Configuration
mongoose.connect('mongodb://127.0.0.1/appvet').then(function () {
    app.listen(port);
    console.log("Servidor listo en el puerto " + port);
}).catch(function () {
    console.log('Error de conxión con la base de datos');
});
