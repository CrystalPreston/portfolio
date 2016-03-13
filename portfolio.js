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
 

/*var ready = function() { 

var changeToOriginalPosition = function(close_box) {
	var initialIndex = parseInt(close_box.parentNode.getAttribute('data-index'));
	var arrayOfElems = document.getElementsByTagName('figure');
	var elemBefore = initialIndex - 1;
	var elemAfter = initialIndex + 1;
	var replica = arrayOfElems[elemAfter].cloneNode();
	if(elemBefore > -1) {
		
		var prevElem = arrayOfElems[elemBefore];	
		prevElem.parentNode.insertBefore(replica, prevElem);
	} else {
	alert('must be0');
		var nextElem = arrayOfElems[elemAfter];
	}
};

var attachCloseHandlers = function() {
	var close_box = document.getElementsByClassName('close_box');
	for(var y = 0; y < close_box.length; y++) {
		close_box[y].addEventListener("click", function(close) {
			changeToOriginalPosition(this);
		});
	}
}();

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
}();

}*/





