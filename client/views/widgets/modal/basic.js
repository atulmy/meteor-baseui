// Widgets Modal

// Helper
Template.widgetsModal.helpers({

});

// Events
Template.widgetsModal.events({

});

// On Render
Template.widgetsModal.rendered = function () {
    console.log('R - Template.widgetsModal.rendered');

    $( function() {
        App.init();

        App.Widgets.Modal.basic();
    });
};