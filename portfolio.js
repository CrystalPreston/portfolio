if (Meteor.isClient || Meteor.isServer) {

Router.configure({
  layout: 'main_template'
});

Router.route('/', function () {
  this.layout('main_template');
  this.render('home');
});

Router.route('/portfolio', function () {
  this.layout('main_template');
  this.render('portfolio_work');
});

Router.route('/work', function () {
  this.layout('main_template');
  this.render('work');
});

Router.route('/play', function() {
  this.layout('main_template');
  this.render('play');
});

Router.route('/qualifications', function() {
  this.layout('main_template');
  this.render('qualifications');
});

Router.route('/skills', function() {
  this.layout('main_template');
  this.render('skills');
});

  Meteor.startup(function () {
    // code to run on server at startup
  });
 
}

// $(function() {

// $.fn.makeItBigger = function() {
//     this.css( "color", "green" );
// };

// $( "a" ).makeItBigger(); 


// });