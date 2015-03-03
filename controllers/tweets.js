Twitter.TweetsController = Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,

  actions: {

    save: function() {
      var newTweet = this.store.createRecord('tweet', {
        tweet: this.get('tweet'),
        date: new Date()
      });

      newTweet.save();
      this.transitionToRoute('tweets');
    }
  }
});
