const Bicicleta = require('../models/bicicleta')

// controllers/PagesController.js
// Importa el modelo de productos
let BiciModel = require('../models/Product')

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
      res.render('pages/homepage', { bicicletas: bicicletas });
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
    let temp_bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo)
    temp_bici.ubicacion = [req.body.lat, req.body.lon]
    Bicicleta.add(temp_bici)
    res.redirect('/bicicletas')
} 

exports.bicicleta_delete_post = function(req, res){
    Bicicleta.removeById(req.params.id) 
    res.redirect('/bicicletas')
}

exports.bicicleta_update_get = function(req, res){
    let bici = Bicicleta.findById(req.params.id)
    res.render('bicicletas/update', {bici})
}

exports.bicicleta_update_post = function(req, res){
    let bici = Bicicleta.findById(req.body.id)
    bici.id = req.body.id
    bici.color = req.body.color
    bici.modelo = req.body.modelo
    bici.ubicacion = [req.body.lat, req.body.lon]

    res.redirect('/bicicletas')
}