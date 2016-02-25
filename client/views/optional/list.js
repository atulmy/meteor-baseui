// Optional

// Helper
Template.optional.helpers({

});

// Events
Template.optional.events({

});

// On Render
Template.optional.rendered = function () {
    console.log('R - Template.optional.rendered');

    $( function() {
        App.init();
    });
};