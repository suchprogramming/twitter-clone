Twitter.Comment = DS.Model.extend({
  text: DS.attr(),
  tweet: DS.belongsTo('tweet', {async: true})
});
