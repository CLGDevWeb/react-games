// Resizing media (screenshots)
export const smallImage = (imagePath, size) => {
    if (imagePath) {
        const image = imagePath.match(/media\/screenshots/) 
        ? imagePath.replace("media/screenshots", `media/resize/${size}/-/screenshots`)
        : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`);
        return image;
    } 
    return imagePath;
}

export const formatDate = (date) => {
    const year = (new Date(date)).toLocaleDateString();
    return year;
}