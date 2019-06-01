function NotificationsView(el) {
  this.$el = $(el);
  this.lastAction = "";

  this.render = function ($el) {
    let section = `  <div class="container-fluid">
                      <div class="content-wrapper">
                      <div class="item-container">
                        <div class="container">
                        <div class="js-updated-at class="col-md-12">
                          Last Action: 
                        </div>
                        </div>
                      </div>
                      </div>
                    </div>`
    
    $el.empty();
    $el.append(section);
  };

  this.updateNotificationsBar = function ($el,lastAction, timer) {
    $el.find('.js-updated-at').text(`Last Action: ${lastAction} (${timer} seconds ago)`);
  }
}