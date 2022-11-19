const usersServices = require('../services/users.services');

// obtener usuario por id
const getUserById = async (req, res, next) => {

    try {
        const {id} = req.params;
        const result = await usersServices.getById(id);
        if (result) {
            res.status(200).json({
                status: 'success',
                result
            })
        } else {
            next({
                status: 500,
                message: 'The id wasnt found'
            })
        }
    } catch (error) {
        next(error);
    }
}

// Obtener a un usuario junto con los cursos donde está suscrito (Mostrar los mismos datos del usuario que en el punto anterior junto al nombre del curso)
const getUserByIdWithCourses = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await usersServices.getUserWithCourses(id);

        if (result) {
            res.status(200).json({
                status: 'success',
                result
            })
        } else {
            next({
                status: 500,
                message: 'The id wasnt found'
            })
        }

    } catch (error) {
        next(error);
    }
}

// crear usuario
const createNewUser = async (req, res, next) => {
    try {
        const {newUser} = req.body;
        const result = await usersServices.create(newUser);
        res.status(201).json({
            status: 'success',
            message: 'Usuario Creado'
        })
    } catch (error) {
        next(error);
    }
}

// Actualizar un usuario, (solo se permitirá los nombres y la contraseña)
const updateUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {firstName, lastName, password} = req.body;
        const result = await usersServices.update(id, {firstName, lastName, password});

        if (result) {
            res.status(201).json({
                status: 'success',
                message: 'usuario actualizado'
            })
        } else {
            next({
                status: 500,
                message: 'The id user wasnt found'
            })
        }

    } catch (error) {
        next(error);
    }
}

module.exports = {getUserById, createNewUser, getUserByIdWithCourses, updateUser};
