const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Category = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'course_id'
    }
}, {
    timestamps: false
})

module.exports = Category;
