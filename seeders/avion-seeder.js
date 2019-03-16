'use strict';

const avion = [{
  id: 1,               // ah ouais, sans ces ids aucune association seed
  typeav: 'Airbus 300',
  capacite: '300',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 2,
  typeav: 'Airbus 100',
  capacite: '100',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 3,
  typeav: 'Airbus 600',
  capacite: '600',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 4,
  typeav: 'Concorde',
  capacite: '600',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 5,
  typeav: 'Boeing 747',
  capacite: '700',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 6,
  typeav: 'Convair 800',
  capacite: '200',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 7,
  typeav: 'Convair 900',
  capacite: '400',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 8,
  typeav: 'Boeing 737-100',
  capacite: '500',
  createdAt: new Date(),
  updatedAt: new Date()
}

];
module.exports = {

  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Avion', avion, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Avion', {
      capacite: {
        $between: [100, 700]
      }
    }, {});
  }
};