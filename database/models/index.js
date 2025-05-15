/*==================================================
/database/models/index.js

It registers models, sets up associations between tables, and generates barrel file for exporting the models.
==================================================*/
const Campus = require('./Campus');  // Import Student model
const Student = require('./Student');  // Import Campus model

Student.belongsTo(Campus, { foreignKey: 'campusId' });  // Student belongs to only one Campus 
Campus.hasMany(Student, { foreignKey: 'campusId' }); // Campus can have many Student

// Export models and associations
module.exports = { Campus, Student };