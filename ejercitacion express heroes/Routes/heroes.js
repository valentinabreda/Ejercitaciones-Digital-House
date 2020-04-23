const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

const listaDeHeroes = {
    listas: function (req, res){
        res.send(heroes);
    }
};

module.exports = listaDeHeroes;

