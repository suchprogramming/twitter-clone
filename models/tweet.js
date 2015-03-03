Twitter.Tweet = DS.Model.extend({
  tweet: DS.attr(),
  date: DS.attr(),
  comments: DS.hasMany('comments', {async: true})
});
