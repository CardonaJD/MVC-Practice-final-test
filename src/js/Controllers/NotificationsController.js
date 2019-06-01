function NotificationsController(el, view, model) {
  this.$el = $(el);
  this.view = view;
  this.model = model;

  this.init = function() {
    this.bindEvents();
    this.view.render(this.$el);
  };

  this.bindEvents = function() {
    EventManager.on('clear.timer', this.clearTimer.bind(this));
    EventManager.on('set.last.action', this.setLastAction.bind(this));
    EventManager.on('render.timer', this.renderTimer.bind(this));
  };

  this.renderTimer = function(){
    let seconds = 0;
    this.view.updateNotificationsBar(this.$el,this.lastAction, 0);
    this.timer = setInterval(() => {
      seconds++
      this.view.updateNotificationsBar(this.$el,this.lastAction, seconds);
    }, 1000);
  };

  this.setLastAction = function(lastAction){
    this.lastAction = lastAction;
  };

  this.clearTimer = function(){
    clearInterval(this.timer);
  };
}
