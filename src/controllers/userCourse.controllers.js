const userCourseServices = require('../services/userCourse.services')

// Agregar un curso a un usuario
const createCourseTtoToUser = async (req, res, next) => {

    try {
        const {userId, newCourse} = req.body;
        const result = userCourseServices.createToUser(newCourse, userId);
        res.status(201).json({
            status: 'success',
            message: 'course added successfully'
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {createCourseTtoToUser};
