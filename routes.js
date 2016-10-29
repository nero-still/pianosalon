Router.route('/', {name:'homepage'});
Router.route('/tradition', {name:'tradition'});
Router.route('/workshop', {name:'workshop'});
Router.route('/concerts', {name:'concerts'});
Router.route('/recordings', {name:'recordings'});
Router.route('/contact', {name:'contact'});

Router.configure({
    layoutTemplate:   "LayoutWithHeader",
    notFoundTemplate: "notFound"
});

// Router.onBeforeAction(function() {
//     if (Meteor.user()) {
//         this.next();
//     }
//     else {
//         Router.go('homepage');
//     }},
//     {except: ['info.page']
// });

// Router.route('/', function () {
//   this.render('homepage', {
//     data: function () { return Items.findOne({_id: this.params._id}); }
//   });
// });
//        