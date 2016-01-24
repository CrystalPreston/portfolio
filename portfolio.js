if (Meteor.isClient || Meteor.isServer) {

Router.map(function () {
  this.route('/', {
  path: '/',
  template: 'layout',
  layoutTemplate: 'home'
  });
});

Router.map(function () {
  this.route('/portfolio', {
  path: '/portfolio',
  template: 'layout',
  layoutTemplate: 'portfolio'
  });
});

Router.map(function () {
  this.route('/work', {
  path: '/work',
  template: 'layout',
  layoutTemplate: 'work'
  });
});
  
Router.map(function () {
  this.route('/play', {
  path: '/play',
  template: 'layout',
  layoutTemplate: 'play'
  });
});

Router.map(function () {
  this.route('/qualifications', {
  path: '/qualifications',
  template: 'layout',
  layoutTemplate: 'qualifications'
  });
});

Router.map(function () {
  this.route('/skills', {
  path: '/skills',
  template: 'layout',
  layoutTemplate: 'skills'
  });
});
  
  }

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  

}
