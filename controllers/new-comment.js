Twitter.NewCommentController = Ember.Controller.extend({
  needs: ['tweet'],
  actions: {
    save: function() {
      var comment = this.store.createRecord('comment', {
        text: this.get('text')
      });
      comment.save();

      var self = this;
      self.set('text','');

      var tweet = this.get('controllers.tweet.model');
      tweet.get('comments').pushObject(comment);
      tweet.save()

      this.transitionToRoute('tweet', tweet.id);
    }
  }
});
