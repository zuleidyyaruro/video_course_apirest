const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Category = require('./category.model');

const Course = db.define('courses', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instructor: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Course;
