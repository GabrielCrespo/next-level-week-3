const express = require('express');
const path = require('path');
const pages = require('./pages');

// iniciando o express
const server = express();
// utilizando arquivos estaticos
server
// utilizando arquivos estaticos
.use(express.static('public'))
// configurar a template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
// rotas da aplicação
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)

// Iniciando o servidor
server.listen(5500);