function TdpController(el, view, model) {
  this.$el = $(el);
  this.view = view;
  this.model = model;

  this.init = function() {
    this.bindEvents();
    this.render();
  };
  
  this.bindEvents = function() {
    this.$el.on('click', 'button', this.updateNotificationsBar.bind(this, 'Button clicked'));
    this.$el.on('click', 'img', this.updateNotificationsBar.bind(this, 'Img clicked'));
    this.$el.on('click', '#myTab a', this.updateNotificationsBar.bind(this, 'Tab clicked'));
    EventManager.on('update.notifications', this.updateNotificationsBar.bind(this));
  };

  this.render = function(){
    let imgUrls = this.model.getImageUrls();
    this.view.render(this.$el, imgUrls)
  };

  this.updateNotificationsBar = function(action){
    EventManager.fire('clear.timer');
    EventManager.fire('set.last.action', action);
    EventManager.fire('render.timer');
  };
}

