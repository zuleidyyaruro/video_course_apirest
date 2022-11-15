const Category = require('./category.model');
const Course = require('./course.model');
const User = require('./user.model');
const UserCourse = require('./userCourse.model');
const Video = require('./video.model');

const initModels = () => {


    Category.belongsTo(Course);
    Course.hasMany(Category);

    Video.belongsTo(Course);
    Course.hasMany(Video);

    // relación de usuarios muchos a muchos con cursos
    UserCourse.belongsTo(User);
    User.hasMany(UserCourse);

    UserCourse.belongsTo(Course);
    Course.hasMany(UserCourse);

}

module.exports = initModels;
