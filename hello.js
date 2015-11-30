if (Meteor.isClient) {

	// counter starts at 0
	Session.setDefault('counter', 0);
	Session.setDefault('template', 'dog');
	FlowRouter.go('/');

	Template.hello.helpers({
		dynamicTemplate: function () {
			return Session.get('template');
		},
		counter: function () {
			return Session.get('counter');
		}
	});

	var templates = {'dog':'fog', 'fog':'blog', 'blog': 'dog'};
	Template.hello.events({
		'click button': function () {
			// increment the counter when button is clicked
			Session.set('counter', Session.get('counter') + 1);
			var next = templates[Session.get('template')];
			Session.set('template', next);
			FlowRouter.go('/' + Session.get('template') + '/meh');
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
