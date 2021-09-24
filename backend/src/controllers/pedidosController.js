//se conectando a database
const knex = require('../database')

//tratamento da rota /funcionario
module.exports = {
    async createpedido(req, res, next) {
        try {
            //atribuindo as variaveis do corpo da requisição
            let { nome, cpf,email,telefone,endereco, pao, carne,opc } = req.body
            //buscando na database se existe o cpf enviado pelo cliente
            const client = await knex('clientes').where({ 'cpf': cpf }).first()
            let client_id
            cpf = parseInt(cpf)
            //se nao existir insira a empresa na database
            if (!client) {
                await knex('clientes').insert({
                    nome,
                    cpf,
                    email,
                    telefone,
                    endereco
                })
            } else {
                //se existir a empresa na database, armazenar seu id em memoria
                client_id = client.id
            }
            
            const clientdb = await knex('clientes').where({ 'cpf': cpf }).first()
            client_id = clientdb.id
                await knex('pedidos').insert({
                    cliente_id:client_id,
                    pao,
                    carne,
                    opcionais:opc
                })
                return res.status(201).json({ message: 'Pedido registrado com Sucesso' })        

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'erro nao previsto' })
        }
    }
}