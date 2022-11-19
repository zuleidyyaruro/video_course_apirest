const User = require('../models/user.model');
const Course = require('../models/course.model');
const UserCourse = require('../models/userCourse.model');

class UsersServices {

    static async getById(id) {
        try {
            const result = await User.findOne({
                    where: {id},
                    attributes: ['firstName', 'lastName', 'email']
                }
            );
            return !!result;
        } catch (error) {
            throw (error);
        }
    }

    static async getUserWithCourses(id) {
        try {
            const result = await User.findOne({
                where: {id},
                attributes: ['firstName', 'lastName', 'email'],
                include: {
                    model: UserCourse,
                    attributes: {
                        exclude: ['userId', 'courseId']
                    },
                    include: {
                        model: Course,
                        attributes: {
                            exclude: ['categoryId', 'id']
                        }
                    }
                }
            })
            return !!result;
        } catch (error) {
            throw (error);
        }
    }

    static async create(newUser) {
        try {
            await User.create(newUser);
            return true;
        } catch (error) {
            throw (error);
        }
    }


    static async update(id, userData) {
        try {
            const user = await User.findOne({where: {id}});
            await user.update({
                firstName: userData.firstName,
                lastName: userData.lastName,
                password: userData.password
            });
            return !!user;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UsersServices;
