// Require de Express
const express = require('express');
const app = express();
const home = require('./Routes/home');
const listaDeHeroes = require('./Routes/heroes');
const heroesPorId = require('./Routes/heroesid');


// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));


app.get('/', home.bienvenido);
app.get('/heroes', listaDeHeroes.listas);
app.get('/heroes/detalle/:id', heroesPorId.obtenerHeroes);





