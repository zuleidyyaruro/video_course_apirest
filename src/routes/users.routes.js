const {Router} = require('express');
const router = Router();

// controllers
const {getUserById, createNewUser, getUserByIdWithCourses, updateUser} = require("../controllers/users.controllers");


router.get('/users/:id', getUserById);
router.get('/users/:id/courses', getUserByIdWithCourses);
router.post('/users', createNewUser);
router.patch('/users/:id', updateUser);


module.exports = router;
