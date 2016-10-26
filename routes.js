// Router.route('/', {name:'homepage'});

Router.configure({
    layoutTemplate:   "LayoutWithHeader",
    // notFoundTemplate: "notFound"
});

Router.onBeforeAction(function() {
    if (Meteor.user()) {
        this.next();
    }
    else {
        Router.go('homepage');
    }},
    {except: ['info.page']
});

Router.route('/', function () {
  this.render('homepage', {
    data: function () { return Items.findOne({_id: this.params._id}); }
  });
});
       