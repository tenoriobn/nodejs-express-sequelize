'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      {
        titulos: 'Node.js',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulos: 'Java',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulos: 'Python',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulos: 'C#',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
