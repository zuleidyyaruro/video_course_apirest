const Course = require('../models/course.model');
const Category = require('../models/category.model');
const Video = require('../models/video.model');

class CoursesServices {

    static async getAll() {
        try {
            return await Course.findAll({
                attributes: {
                    exclude: ['categoryId', 'id']
                }
            });
        } catch (error) {
            throw (error)
        }
    }

    static async getAllWithCategoryAndVideos() {
        try {
            return await Course.findAll({
                    include: [
                        {model: Category, attributes: ['name']}, {model: Video, attributes: ['title', 'url']}
                    ]
                },
            )
        } catch (error) {
            throw (error);
        }
    }

    static async create(newCourse) {
        try {
            await Course.create(newCourse);
            return true;
        } catch (error) {
            throw (error);
        }
    }

    static async update(id, description) {
        try {
            const course = await Course.findOne({where: {id}});
            course.update({description});
            return true;
        } catch (error) {
            throw (error);
        }
    }
}

module.exports = CoursesServices;
