const Bicicleta = require('../models/bicicleta')

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  // Nota que la consulta a los productos utiliza "promesas"
  // conoce más en: 
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
  BiciModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let bicicletas = data;
      // Enviamos los datos a la vista
      res.render('bicicletas/index', { bicicletas: bicicletas });
    });
}

// Reglas para la respuesta para la petición "/about"
exports.about = (req, res) => {
  res.send('About us');
}

exports.bicicleta_list = function(req, res){
    res.render('bicicletas/index', {bicis: Bicicleta.allBicis})
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function(req, res){
    Bicicleta.add(req.body.color, req.body.modelo, req.body.lat, req.body.lon)
    res.redirect('/bicicletas')
} 

exports.bicicleta_delete_post = function(req, res){
    Bicicleta.delete(req.params.id) 
    res.redirect('/bicicletas')
}

exports.bicicleta_update_get = function(req, res){
    Bicicleta.show(req.params.id)
    .then((row) => {
      // Guardamos los productos en una variable
      let bicicleta = row;
      // Enviamos los datos a la vista
      res.render('bicicletas/update', { bici: bicicleta });
    });
}

exports.bicicleta_update_post = function(req, res){
    BicicletaModel.update(req.body.id,req.body.color, req.body.modelo, req.body.lat, req.body.lon)
    res.redirect('/bicicletas')
}