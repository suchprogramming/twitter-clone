Twitter.TweetsController = Ember.ArrayController.extend({

  actions: {
    sortProperties: ['date'],
    sortByDate: function() {
      this.set('sortProperties', ['date']);
    }
  }
});
