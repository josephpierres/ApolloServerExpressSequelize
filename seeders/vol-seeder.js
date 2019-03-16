'use strict';

const vol = [{
  id: 1,
  villeDepart: 'Port-au-Prince',
  villeArrive: 'Gonaives',
  AvionId: 1,
  PiloteId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 2,
  villeDepart: 'Port-au-Prince',
  villeArrive: 'Cap-Haitien',
  AvionId: 3,
  PiloteId: 3,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 3,
  villeDepart: 'Gonaives',
  villeArrive: 'Cap-Haitien',
  AvionId: 4,
  PiloteId: 5,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 4,
  villeDepart: 'Gonaives',
  villeArrive: 'Port-au-Prince',
  AvionId: 1,
  PiloteId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 5,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Gonaives',
  AvionId: 4,
  PiloteId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 6,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Gonaives',
  AvionId: 2,
  PiloteId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 7,
  villeDepart: 'Port-au-Prince',
  villeArrive: 'Gonaives',
  AvionId: 5,
  PiloteId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 8,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Gonaives',
  AvionId: 3,
  PiloteId: 4,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 9,
  villeDepart: 'Hinche',
  villeArrive: 'Cayes',
  AvionId: 6,
  PiloteId: 4,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 10,
  villeDepart: 'Gros-Morne',
  villeArrive: 'Plaisance',
  AvionId: 7,
  PiloteId: 7,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 11,
  villeDepart: 'Trou du Nord',
  villeArrive: 'Gonaives',
  AvionId: 7,
  PiloteId: 5,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 12,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 8,
  PiloteId: 4,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 13,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 1,
  PiloteId: 4,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 14,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 1,
  PiloteId: 3,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 15,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 1,
  PiloteId: 5,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 16,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 2,
  PiloteId: 4,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 17,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 8,
  PiloteId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 18,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 8,
  PiloteId: 3,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 19,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 7,
  PiloteId: 4,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 20,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 4,
  PiloteId: 3,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 21,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 4,
  PiloteId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 22,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 8,
  PiloteId: 4,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 23,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 2,
  PiloteId: 4,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 24,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 2,
  PiloteId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 25,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 4,
  PiloteId: 4,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 26,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 5,
  PiloteId: 5,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 27,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 6,
  PiloteId: 6,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 28,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 5,
  PiloteId: 5,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id: 29,
  villeDepart: 'Cap-Haitien',
  villeArrive: 'Limbe',
  AvionId: 6,
  PiloteId: 6,
  createdAt: new Date(),
  updatedAt: new Date()
}
];
module.exports = {

  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Vol', vol, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Vol', {
      villeDepart: {
        $in: ['Cap-Haitien', 'Gonaives', 'Port-au-Prince']
      }
    }, {});
  }
};