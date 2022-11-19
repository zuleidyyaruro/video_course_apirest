const CategoryServices = require('../services/categories.services');

// crear categorías
const createCategory = async (req, res, next) => {
    try {
        const {newCategory} = req.body;
        await CategoryServices.create(newCategory);
        res.status(201).json({
            status: 'success',
            message: 'category created successfully'
        })

    } catch (error) {
        next(error);
    }
}

// eliminar categoria
const deleteCategory = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await CategoryServices.delete(id);
        if (result) {
            res.status(200).json({
                status: 'success',
                message: 'video deleted successfully'
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

module.exports = {createCategory, deleteCategory};
