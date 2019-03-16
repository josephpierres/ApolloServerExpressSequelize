'use strict';

const pilote = [{
  id: 1,
  nom: 'Joze',
  adresse: 'Port-au-Prince',
  salaire: 5000,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 2,
  nom: 'Igor',
  adresse: 'Gonaives',
  salaire: 5500,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 3,
  nom: 'Pierre',
  adresse: 'Port-au-Prince',
  salaire: 6000,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 4,
  nom: 'Joseph',
  adresse: 'Cap-Haitien',
  salaire: 6000,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 5,
  nom: 'Andre',
  adresse: 'Port-au-Prince',
  salaire: 5000,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 6,
  nom: 'Eric',
  adresse: 'Gonaives',
  salaire: 6600,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 7,
  nom: 'Carmel',
  adresse: 'Cap-Haitien',
  salaire: 6600,
  createdAt: new Date(),
  updatedAt: new Date()
}
];
module.exports = {

  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Pilote', pilote, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pilote', {
      email: {
        $in: ['Cap-Haitien', 'Gonaives', 'Port-au-Prince']
      }
    }, {});
  }
};