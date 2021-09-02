const express = require("express");
const bodyParser =  require("body-parser");
const app = express();

// Settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

// Analizar solicitudes de tipo: application/json
app.use(bodyParser.json());

// Analizar solicitudes de tipo: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use(require('./app/routes/cliente.routes.js'));

// configurar el puerto, para escuchar peticiones de servicio
app.listen(app.get('port'), () => {
    console.log("Server ejecutandose") ;
});

