const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const User = require('./user.model');
const Course = require('./course.model');

const UserCourse = db.define('users_courses', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
            model: User
        }
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

module.exports = UserCourse;

