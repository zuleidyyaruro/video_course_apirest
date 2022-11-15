const coursesServices = require('../services/courses.services');

// Obtener todos los cursos
const getAllCourses = async (req, res, next) => {

    try {
        const result = await coursesServices.getAll();
        res.status(200).json({
            status: 'success',
            result
        })
    } catch (error) {
        console.log(error);
    }
}

// Obtener todos los cursos junto a sus categorías y sus videos (de las categorías solo deberás mostrar el nombre,
// de los videos solo deberás mostrar el nombre y su url
const getAllCoursesWithCategoriesAndVideos = async (req, res, next) => {

    try {
        const result = await coursesServices.getAllWithCategoryAndVideos();
        res.status(201).json({
            status: 'success',
            result
        })
    } catch (error) {
        console.log(error);
    }
}

// Crear un nuevo curso
const creatNewCourse = async (req, res, next) => {
    try {
        const {newCourse} = req.body;
        await coursesServices.create(newCourse);
        res.status(201).json({
            status: 'success',
            message: 'course added successfully'
        })
    } catch (error) {
        console.log(error);
    }
}

// Editar un curso (solo se permite cambiar la descripción)
const updateCourse = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        await coursesServices.update(id, description);
        res.status(201).json({
            status: 'success',
            message: 'course updated successfully'
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAllCourses, getAllCoursesWithCategoriesAndVideos, creatNewCourse, updateCourse};
