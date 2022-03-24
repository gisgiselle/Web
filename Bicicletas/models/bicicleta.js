// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (id, color, modelo, lat, lon) => {
  return {
    id: id,
    color: color,
    modelo: modelo,
    lat: lat,
    lon:lon
  }
}
// Almacen en la base de datos el producto
exports.create = (bicicleta) => {
    return knex('bicicletas')
      .insert({
        name: product.name,
        price: product.price,
        description: product.description
      });
  }

// Obtiene todos los productos en la base
exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('bicicletas');
}