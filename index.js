
/*Crear Servidor con express*/
const express = require('express');
const morgan = require('morgan');
const app = express();

//requiriendo rutas
const routes = require('./routes');
const routesApi = require('./routes-api');

//Settings - Configuraciones
app.set('appName', 'Mi primer Server'); //Nombre del Servidor
app.set('views', __dirname + '/views'); //Definir la carpeta para los templates

app.set('view engine', 'ejs');


//MIDDLEWARES
app.use(morgan('combined'));


//Rutas
app.use(routes);
app.use('/api', routesApi);

//Ruta 404  '*'
app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
});


//Definir en que puerto va a escuchar el servidor
app.listen(3000, () => {
    console.log('Servidor Iniciado');
    console.log('Servidor arriba!');
    console.log('Nombre de la App: ', app.get('appName'));
});



/*  Crear Servidor solo con NodeJs
const http = require('http');

http.createServer((req, res) => {

    res.end('Hello World');
}).listen(3000);
*/