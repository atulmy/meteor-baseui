// Optional Colors

// Helper
Template.optionalColors.helpers({

});

// Events
Template.optionalColors.events({

});

// On Render
Template.optionalColors.rendered = function () {
    console.log('R - Template.optionalColors.rendered');

    $( function() {
        App.init();
    });
};