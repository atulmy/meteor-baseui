// Blog Latest

// Helper
Template.blogLatest.helpers({

});

// Events
Template.blogLatest.events({

});

// On Render
Template.blogLatest.rendered = function () {
    console.log('R - Template.blogLatest.rendered');

    $( function() {
        App.init();
    });
};