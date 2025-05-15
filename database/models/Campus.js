const Sequelize = require('sequelize');
const db        = require('../db');

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://s29068.pcdn.co/wp-content/uploads/campus-shot-768x432.jpg.optimal.jpg'
  }
});

module.exports = Campus;


