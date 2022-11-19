const Category = require('../models/category.model');

class CategoryServices {

    static async create(newCategory) {
        try {
            return await Category.create(newCategory);
        } catch (error) {
            throw (error);
        }
    }

    static async delete(id) {
        try {
            return await Category.destroy({where: {id}});
        } catch (error) {
            throw (error);
        }
    }
}

module.exports = CategoryServices;
