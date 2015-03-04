Twitter.TweetsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('tweet');
  },
});
