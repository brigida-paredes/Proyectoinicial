var express = require('express');
var router = express.Router();
var pelicula={
genero:"ACCION",
nombre:"AVENGERS",
precio:"55",
tiempo:"68"
};
router.get('/', function(req, res, next) {
res.render('pelicula', { objeto: pelicula });
});
module.exports = router;

