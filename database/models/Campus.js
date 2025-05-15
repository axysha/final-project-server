/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');       // Import Sequelize
const db        = require('../db');           // Import Sequelize database instance called "db"

// Define the campus model
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

