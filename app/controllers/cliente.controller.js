const Cliente = require("../models/cliente.model.js");

//Crea y graba un nuevo Cliente
exports.create = (req, res) => {
   // Valida la petición
   if(!req.body) {
       res.status(400).send({
         message: "Contenido no puede estar vacio!"
       });
   }

   //crear un cliente
   const cliente = new Cliente({
       email: req.body.email,
       nombre: req.body.nombre,
       activo: req.body.activo
   });

   //Graba Cliente en la base de datos
   Cliente.create(cliente, (err, data) =>{
       if(err)
         res.status(500).send({
             message:
                err.message || "Ocurrió un error en la creación del Cliente."
         }); 
        else res.send(data); 
   });

};

//Retorna todos los Clientes de la base de datos.
exports.findAll = (req, res) => {
    Cliente.getAll((err, data) => {
       if(err)
        res.status(500).send({
            message:
               err.message || "Ocurrió un error recuperando los clientes."
        });
        else res.send(data);
    });

};

//Encuentra un cliente con el clienteId
exports.findOne = (req, res) => {
    Cliente.findById(req.params.clienteId, (err, data) => { 
       if(err) {
           if(err.kind === "not_found") {
              res.status(404).send({
                 message:"Cliente no encontrado con el id ${req.params.clienteId}."
              }); 
           } else {
               res.status(500).send({
                 message: "Error recuperando Cliente con id " + req.params.clienteId  
               });
           } 
       } else res.send(data);
    });
};

//Modifica un Cliente identificado por el clienteId en la peticion
exports.update = (req, res) => {
    //Valida la petición
    if (!req.body) {
        res.status(400).send({
            message: "El contenido no puede estar vacio!"
        });
    }

    Cliente.updateById(
       req.params.clienteId,
       new Cliente(req.body),
       (err, data) => {
          if (err) {
              if (err.kind === "no_encontrado") {
                 res.status(404).send({
                     message: "Cliente no encontrado con el id ${req.param.clienteId}."
                 }); 
              } else {
                  res.status(500).send({
                      message: "Error modificando Cliente con id " + req.params.clienteId
                  });
              }
          } else res.send(data);
       } 
    );
    
};

// Eliminar un Cliente con una clienteId en la peticion
exports.delete = (req, res) => {
    Cliente.remove(req.params.clienteId, (err, data) => {
        if(err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: "Cliente no encontrado con id $(req.params.clienteId)"
                });
            } else {
                res.status(500).send({
                    message: "No se puede eliminar Cliente con el id " + req.params.clienteId
                });
            }
        } else res.send({ message: "Cliente eliminado con éxito!"});
    });
};

// Eliminar todos los Clientes de la base de datos
exports.deleteAll = (req, res) => {
    Cliente.removeAll((err, data) => {
        if (err)
          res.status(500).send({
              message:
                err.message || "Ocurrió un error al eliminar los clientes."
          });
        else res.send({ message: "Todos los clientes fueron borrados con éxito!"});
    });
}; 