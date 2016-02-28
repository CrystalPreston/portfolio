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
  Template.portfolio_work.rendered = function() {
	getPortfolioElems();
	attachCloseHandlers();
  }
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
  
  
  
var getPortfolioElems = function(test) {
	var portfolio_examples = document.getElementsByTagName('figure');
	var container = document.createElement('div');
	var content = document.getElementsByClassName('preview_div')[0];
	
	[].forEach.call(portfolio_examples, function(figure,index,figures) {
		figure.onclick = function() {
		var product = this.id;
		var desc_box = (this.getElementsByClassName('description'));
		desc_box[0].innerHTML = 'works';
		container.appendChild(this);
		}
	});
	content.appendChild(container);
} 
var attachCloseHandlers = function() {	
	var close_box = document.getElementsByClassName('close_box')[0];
	console.log(close_box);
	
	//[].forEach.call(close_box, function(close, index, close_boxes) {
		close_box.onclick = function() {
			alert('Crystal is amazing!');
		}
//	});
}





