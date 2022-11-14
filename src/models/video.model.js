const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Course = require('./course.model');

const Video = db.define('videos', {
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
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'course_id',
        references: {
            model: Course
        }
    }
}, {
    timestamps: false
})

module.exports = Video;
