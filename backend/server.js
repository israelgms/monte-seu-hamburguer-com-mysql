const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const basicAuth = require('./src/helpers/basic-auth')
// const swaggerDocument = require('./swagger/swagger.json')
// const swaggerUi = require('swagger-ui-express')

const app = express()


app.use(cors())
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(basicAuth)

app.use(express.json())

app.use(routes)




//catch all
/*app.use((error, req,res,next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})*/


app.listen(3333, ()=> console.log('Server is running'))