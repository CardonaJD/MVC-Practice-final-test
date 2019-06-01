function NotificationsModel() {
  this.data = [];

  this.init = function(imagesService) {
    this.ImagesService = imagesService;
    console.log(this.ImagesService);
  }
}
