const {Router} = require('express');
const router = Router();

const {
    getAllCourses,
    getAllCoursesWithCategoriesAndVideos,
    creatNewCourse,
    updateCourse
} = require('../controllers/courses.controllers');

router.get('/courses', getAllCourses);
router.get('/courses/videos', getAllCoursesWithCategoriesAndVideos);
router.post('/courses', creatNewCourse);
router.patch('/courses/:id', updateCourse);

module.exports = router;
