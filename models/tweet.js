Twitter.Tweet = DS.Model.extend({
  tweet: DS.attr(),
  rawDate: DS.attr(),
  hashtag: DS.attr(),
  comments: DS.hasMany('comments', {async: true})
});
