const videosServices = require('../services/videos.services');

// Crear videos
const createNewVideo = async (req, res, next) => {

    try {
        const {newVideo} = req.body;
        await videosServices.create(newVideo);
        res.status(201).json({
            status: 'success',
            message: 'video created successfully'
        })
    } catch (error) {
        console.log(error);
    }
}

// Eliminar videos
const deleteVideo = async (req, res, next) => {

    try {
        const {id} = req.params;
        const result = await videosServices.delete(id);

        if (result) {
            res.status(200).json({
                status: 'success',
                message: 'video deleted successfully'
            })
        } else {
            next({
                status: 500,
                message:'The id wasnt found'
            })
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {createNewVideo, deleteVideo};
