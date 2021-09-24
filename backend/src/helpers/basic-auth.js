//importando as credenciais 
const userService = require('../authenticate')




//validando 
async function basicAuth(req,res,next){
    // checando se as credenciais foram inseridas
    if(!req.headers.authorization || req.headers.authorization.indexOf('Basic') === -1) {
        return res.status(403).json({ message: 'Header de Autorizacao nao encontrado'})
    }

    //transformando as credencias de base64 para string e validando

    const base64Credentials = req.headers.authorization.split(' ')[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
    const [username, password] = credentials.split(':')
    const user = await userService.authenticate({ username, password})
    if (!user){
        return res.status(403).json({ message: ` ${username} + ${password} Usuario e/ou senha invalidos`})
    }

    //atribuindo usuario no objeto da requisicao
    req.user = user

    next();
}

module.exports = basicAuth