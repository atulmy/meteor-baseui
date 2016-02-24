// Widgets Modal Basic

// Helper
Template.widgets.helpers({

});

// Events
Template.widgets.events({

});

// On Render
Template.widgets.rendered = function () {
    console.log('R - Template.widgets.rendered');

    $( function() {
        App.init();
    });
};