const express = require('express')
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router() //constrole especifico de rotas do express

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DislikeController.store)

//para exportar/expor as rotas para que o servidor conheça as rotas
module.exports = routes
