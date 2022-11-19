const {Router}=require('express');
const router=Router();

const {createCourseTtoToUser} = require('../controllers/userCourse.controllers');

router.post('/user-course', createCourseTtoToUser);

module.exports = router;
