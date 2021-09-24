const express = require('express')

//criando as rotas e estabelecendo seus controllers
const routes = express.Router()


const pedidosController = require('./src/controllers/pedidosController')

// routes.get('/empresa', EmpresaController.index)

routes.post('/pedidos', pedidosController.createpedido)

module.exports = routes