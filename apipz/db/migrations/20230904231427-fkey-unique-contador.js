'use strict';
const {DataTypes} = require('sequelize')

const {FIELES_TABLE} = require('../models/fiel.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(FIELES_TABLE,'contador_id',{
      allowNull: false,
      field:"contador_id",
      type: DataTypes.INTEGER,
      unique:true,
    }
  )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
