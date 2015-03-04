Twitter.TweetsController = Ember.ArrayController.extend({
  itemController: 'tweet',
  sortProperties: ['rawDate'],
  sortAscending: false,

  actions: {

    save: function() {
      var myRe = /#\w+/g;
      var rawDate = new Date();
      var newTweet = this.store.createRecord('tweet', {
        tweet: this.get('tweet'),
        rawDate: rawDate,
        hashtag: myRe.exec(this.get('tweet'))
      });

      newTweet.save();
      var self = this;
      self.set('tweet', "");
      this.transitionToRoute('tweets');
    }
  }
});
