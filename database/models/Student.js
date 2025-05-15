/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');
const db        = require('../db');

const Campus    = require('./Campus');

const Campus    = require('./Campus');

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '/student.png'
  },
  gpa: {
    type: Sequelize.DECIMAL(2, 1),
    allowNull: true,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

Student.belongsTo(Campus, {
  foreignKey: 'campusId',
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE'
});

// Export the student model
module.exports = Student;