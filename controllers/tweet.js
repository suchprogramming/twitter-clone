Twitter.TweetController = Ember.ObjectController.extend({
  isExpanded: false,
  actions: {
    delete: function() {
      if (confirm('Are you sure?')) {
      this.get('model').destroyRecord();
      this.transitionToRoute('tweets');
      }
    },
    toggleDate: function() {
      this.set('isExpanded', !this.isExpanded);
      console.log(this.isExpanded);
    }
  }
});
