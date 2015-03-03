Twitter.TweetRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('tweet', params.tweet_id);
  }
});
