const {Router} = require('express');
const router = Router();

const {createNewVideo, deleteVideo} = require('../controllers/videos.controllers');

router.post('/videos', createNewVideo);
router.delete('/videos/:id', deleteVideo);

module.exports = router;
