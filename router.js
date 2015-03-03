Twitter.Router.map(function() {
  this.resource('tweets', {path: '/'});
  this.resource('tweet', {path: 'tweets/:tweet_id'});
  this.resource('new-tweet');
  // this.resource('about');
  // this.resource('contact', function() {
  //   this.resource('phone');
  //   this.resource('email');
  // });
  // this.resource('recent-comments');
  // this.resource('post', {path: 'posts/:post_id'});
});
