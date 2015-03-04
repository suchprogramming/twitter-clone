Twitter.TweetsController = Ember.ArrayController.extend({

  sortProperties: ['date'],
  sortAscending: false,
  isExpanded: false,

  actions: {

    save: function() {
      var myRe = /#\w+/g;
      var newTweet = this.store.createRecord('tweet', {
        tweet: this.get('tweet'),
        date: new Date(),
        hashtag: myRe.exec(this.get('tweet'))
      });

      newTweet.save();
      var self = this;
      self.set('tweet', "");
      this.transitionToRoute('tweets');
    },

    toggle: function() {
      this.set('isExpanded', !this.isExpanded);
      console.log(this.isExpanded);
    }
  }
});
