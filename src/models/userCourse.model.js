const db = require('../utils/database');
const {DataTypes} = require('sequelize');

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
        field: 'user_id'
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'course_id'
    }
}, {
    timestamps: false
})

module.exports = UserCourse;

