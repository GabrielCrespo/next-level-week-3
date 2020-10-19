const express = require('express');
const path = require('path');
const pages = require('./pages');

// iniciando o express
const server = express();
server
// utilizando dados do body
.use(express.urlencoded({ extended: true }))
// utilizando arquivos estaticos
.use(express.static('public'))
// configurar a template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
// rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)


// Iniciando o servidor
server.listen(5500);