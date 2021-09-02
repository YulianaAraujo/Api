const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

//Crear la conexión a la base de datos
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//Abre la conexion a MySQL
connection.connect(err => {
    if (err) throw err;
    console.log("Conexión exitosa a la base de datos");
});


module.exports = connection;