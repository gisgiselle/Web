exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bicicletas').del()
    .then(function () {
      // Inserts seed entries
      return knex('bicicletas').insert([
        { id: 'T-800', color: 'morado', modelo: 100, lat:19.401550692138798, lon: -99.18798841881264},
        { id: 'T-A-200', color: 'azul', modelo: 351, lat:17.401550692138798, lon: -99.18798841881264},
      ]);
    });
};