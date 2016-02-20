// Blog Write

// Helper
Template.blogWrite.helpers({

});

// Events
Template.blogWrite.events({

});

// On Render
Template.blogWrite.rendered = function () {
    console.log('R - Template.blogWrite.rendered');

    $( function() {
        App.init();
    });
};