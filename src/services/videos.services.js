const Video = require('../models/video.model');

class VideosServices {

    static async create(newVideo) {
        try {
            await Video.create(newVideo);
            return true;
        } catch (error) {
            throw (error);
        }
    }

    static async delete(id) {
        try {
            const result = await Video.destroy({where: {id}});
            return result ? true : false;
        } catch (error) {
            throw (error);
        }
    }
}

module.exports = VideosServices;
