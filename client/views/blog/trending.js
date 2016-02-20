// Blog Latest

// Helper
Template.blogTrending.helpers({

});

// Events
Template.blogTrending.events({

});

// On Render
Template.blogTrending.rendered = function () {
    console.log('R - Template.blogTrending.rendered');

    $( function() {
        App.init();
    });
};