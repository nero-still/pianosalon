Template.LayoutWithHeader.events({
    'click [data-logout]': function(e, tmpl)
    {
        Meteor.logout();
    },
});