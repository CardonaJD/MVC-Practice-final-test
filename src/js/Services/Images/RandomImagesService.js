function RandomImagesService() {

    const generateRandomNumber = (max, min) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.getImage = function (id, width, height) {
        let imageId = id || generateRandomNumber(100, 10);
        return `https://picsum.photos/id/${imageId}/${width}/${height}`;
    }
}