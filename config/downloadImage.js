const axios = require('axios');

const downloadImage = async (imageUrl) => {
    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        return response.data;
    } catch (error) {
        console.error('Error downloading image:', error);
        throw error;
    }
};

module.exports = downloadImage;