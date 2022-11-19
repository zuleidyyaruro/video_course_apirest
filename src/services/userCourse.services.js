const Course = require("../models/course.model");
const UserCourse = require('../models/userCourse.model');

class UserCourseServices {

    static async createToUser(newCourse, userId) {
        try {
            const resultCourse = await Course.create(newCourse);
            await UserCourse.create({userId, courseId: resultCourse.id})
            return true;
        } catch (error) {
            throw (error);
        }
    }
}

module.exports = UserCourseServices;
