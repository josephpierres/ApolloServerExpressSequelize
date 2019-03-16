'use strict';

const User = [{
  firstname: 'Joze',
  lastname: 'Potrebujes',
  username: 'joze.potrebuje@gmail.com',
  email: 'joze.potrebuje@gmail.com',
  mobileVerified: false,
  gender: 'M',
  password: 'joze',
  messages: [''],
  notifications: [''],
  tasks: [''],
  mobile: '041370705',
  createdAt: new Date(),
  updatedAt: new Date()
},
{

  firstname: 'Igor',
  lastname: 'Kristofic',
  username: 'pjoseph@hotmail.com',
  email: 'pjoseph@hotmail.com',
  gender: 'M',
  password: '$2a$10$BfFhPGB.FQzNT5Wk/sU.1eMWxLLEvB2fQy.W556fBBJRRppJwB3Im',
  messages: ['Qui es - tu ?'],
  notifications: ['notification de presence'],
  tasks: ['bouteille à jeter'],
  mobileVerified: false,
  mobile: '040404878',
  createdAt: new Date(),
  updatedAt: new Date()
},
{

  firstname: 'Pierre',
  lastname: 'JOSEPH',
  username: 'josephpierres@hotmail.com',
  email: 'josephpierres@hotmail.com',
  gender: 'M',
  password: '$2a$10$BfFhPGB.FQzNT5Wk/sU.1eMWxLLEvB2fQy.W556fBBJRRppJwB3Im',
  messages: [''],
  notifications: [''],
  tasks: [''],
  role: 'admin',
  mobileVerified: true,
  mobile: '50937295748',
  createdAt: new Date(),
  updatedAt: new Date()
}
];
module.exports = {

  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('user', User, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', {
      email: {
        $in: ['joze.potrebuje@gmail.com', 'pjoseph@hotmail.com', 'josephpierres@hotmail.com']
      }
    }, {});
  }
};