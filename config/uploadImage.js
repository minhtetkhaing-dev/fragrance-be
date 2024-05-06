const fs = require('fs').promises;
const path = require('path');
const downloadImage = require('./downloadImage');

const uploadImageToStorage = async (imageUrl) => {
    const imageBuffer = await downloadImage(imageUrl);
    const uniqueFilename = Date.now() + Math.round(Math.random() * 1000) + '.jpg';
    const uploadDir = 'public/images';

    try {
        await fs.mkdir(uploadDir, { recursive: true });
        await fs.chmod(uploadDir, 0o755);

        const uploadedImagePath = path.join(uploadDir, uniqueFilename);
        await fs.writeFile(uploadedImagePath, imageBuffer);
        
        return uniqueFilename;
    } catch (error) {
        throw error;
    }
}

module.exports = uploadImageToStorage;
