// Widgets Modal Full

// Helper
Template.widgetsModalFull.helpers({

});

// Events
Template.widgetsModalFull.events({

});

// On Render
Template.widgetsModalFull.rendered = function () {
    console.log('R - Template.widgetsModalFull.rendered');

    $( function() {
        App.init();

        App.Widgets.Modal.full();
    });
};