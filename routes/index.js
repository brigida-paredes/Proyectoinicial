var express = require('express');
var router = express.Router();
var contacto = require('../controllers/contacto')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/regContacto',contacto.registroContacto);
router.get('/rescontacto',contacto.respuestaContacto);
module.exports = router;
