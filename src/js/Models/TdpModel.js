function TdpModel() {  
  this.init = function(imagesService) {
    this.ImagesService = imagesService;
  }

  this.getImageUrls = function(){
    return [{
      url: this.ImagesService.getImage(400,235,321)
    },
    { 
      url: this.ImagesService.getImage(401,120,107)
    },
    { 
      url: this.ImagesService.getImage(402,120,107)
    },
    { 
      url: this.ImagesService.getImage(403,120,107)
    }]
  }
}
