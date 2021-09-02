
  const { Router } = require('express');
  const router = Router();
  const clientes = require("../controllers/cliente.controller.js");

  // enrutamiento simple
  router.get("/", (req, res) => {
    res.json({ message: "Bienvenido al servidor" });
  });
  
  //Crear un cliente
  router.post("/clientes", clientes.create);

  // Retorna todos los clientes
  router.get("/clientes", clientes.findAll);

  // Retorna un cliente con el clienteId
  router.get("/clientes/:clienteId", clientes.findOne);

  //Modifica un cliente con el clienteId
  router.put("/clientes/:clienteId", clientes.update);

  //Elimina un cliente con el clienteId
  router.delete("/clientes/:clienteId", clientes.delete);

  //crea un nuevo cliente
  router.delete("/clientes", clientes.deleteAll);

module.exports = router;