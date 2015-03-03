Twitter.Tweet = DS.Model.extend({
  tweet: DS.attr(),
  date: DS.attr(),
  hashtag: DS.attr(),
  comments: DS.hasMany('comments', {async: true})
});

// var myRe = /#\w+/g;
