const Category = require('./category.model');
const Course = require('./course.model');
const User = require('./user.model');
const UserCourse = require('./userCourse.model');
const Video = require('./video.model');

const initModels = () => {

    Category;
    Course;
    User;
    UserCourse;
    Video;
}

module.exports = initModels;
