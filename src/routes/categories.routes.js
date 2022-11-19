const {Router} = require('express');
const router = Router();
const {createCategory, deleteCategory} = require('../controllers/categories.controllers');

router.post('/categories', createCategory);
router.delete('/categories/:id', deleteCategory);

module.exports = router;
